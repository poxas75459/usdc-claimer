/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2Aks7zkNBHwg2NV4NPPjLeppv82XWwmYumYQ4w5MuVsgQzshAWr9exr9RptSeV4ubuEaoinNyNzBkvzydzZ3F3F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v28rRCkwpkgR1Ge1hrV4VAma3bRcdPmCqjtKzchj4MkUVqHNQRqRVPcxJZ5bNkYpcMpbzWKWQ1srcED2sYjHF18",
  "key1": "ghqry8rh1ogzrcU1Gui21isTDAHmcwMmsAgLEAMBZY5Zj4wr4VKffTixRLbyVg41gxSMYtHU3MyfbG6mMTXgHGW",
  "key2": "bBrQu1eTqKKgASSkr9y91CFEgne8z11hPH6PQ5eQNUXJCGZYB5HMUX9R32EgoqiixfdcQNx6jXf4VCFAf3HAeNz",
  "key3": "2GQEToWjsrHV58M5whjxBhnPpx6JkYwK7Mf7SE1wq1HBx7AgRmFUpyUKKABsKcMMzeSwmMNjTUSp6Ext3hgR2uB2",
  "key4": "4EBi1jWkfqBs3oeJmWoyroWxpkeQb16ChAEvviVappANkJwieMpf4PHv9MxJ9KWw64vGYXUuFhp2bceGszRioVWS",
  "key5": "25dcwARWfrgizJjXDikvwgix8ZgEsR4yYmTorXvuz4dTLfmGjF4aYhFoz1mbg22GVuMrYa5MXksb4APHu3UJqE8i",
  "key6": "4HPW78D5cFyr2ctZ5jjTuKDLpNegnkyhdFm3TcTRmaq5itbLoAXL6q3o6kXg134sHd9s323d5ts4dDXiWc4JFCZz",
  "key7": "MjATTEGgTNwgwxsT5NTGncK8DYeoQQBrRdn4MaXCm15jNbbgcpnjXZbuHVcs369zfToieh8899fCUWSx7utSXnP",
  "key8": "3oFsbjBksqehPdenQ4F9q6HjZMqvcxvTQycGEp76fyjph5qEdD3kwm9BFvbPbTRPkZfNpPoZxpRTfD7JouCa395R",
  "key9": "29SzrrNGbH7oyFUBV5K77reaNvbxTnDo4Ym8Mk5XMYYa9njfgZczjzoJvpBcoLovZendTgyBuD2Xja2BYuKoPfR9",
  "key10": "3ZBKT317d5zhrzrnkNL6ftfewAM6udRMCKekqHDGhWkwCsa1hVUx52PD9ufTwgpuwtKFGncLKPpLpBmZF9oCZaVd",
  "key11": "2exb1byvSFe9ndpUxzFHupVfsyNR9fsEeUSiFNjNjRNGHn3wXguLk2TujGhgnQ6ku7v53gt59gsJJWzTLw4kzNpk",
  "key12": "32HjWje8h1FdK4vcp2LS9nwBCTx6iMdcEWez5PvQBooPBBELB9hSz5ni7xExf9qj4GrmZmU8wwLVPqfSvyXucNA5",
  "key13": "2ji6hXSsjYFQeZZ81YTq9feP5cz8FrYPdkA7z3zpSiJWyWwHfHzSoJUxyXXD2svjJ2NbiKPaM3QgayXinMxVgd2j",
  "key14": "2qddiJRnFcbh1Dyc8ZDXFcUc393Z2Dn2kzkhgFQ4Xk3PqCkKPNeNqqpCFgZgJdJU5Xhk87XPciz6vd3udbrsHgHv",
  "key15": "3Q5po1uU5BdGmvUHwy78P4W1Jdtpuenrk2kkFxP75VniQ6B33szrLfLZzKqHCDm6WPqZf6WGNfswqiqmaom2SJ6o",
  "key16": "43qY5kfvgxK2jWGfYUHNLkmwGN8tsU2wBwLK1m37KFsu5w4ZWhKwBQaekLTi7yEEmMoY6iEPPbQrBtxpvRB3svQX",
  "key17": "2apJ5UzG6FmSXHXZU9Vm5zqVvjyXnA9bwsLJJRp5YWgZPN4ZhwFzxkERCsAWJZYPbVGYxobsZUyDKzN8nfoomv38",
  "key18": "2BcPTbhVqwquc1p4rq9KxaGJyq8kwoQEiC3H4v51TZV252h4GrtShKTsagq95Rqcg6iuZAb6KKhDDWPcFkbcdhRd",
  "key19": "3NoRMokoDgwRtTVBh7dLSLs8ZzMSgoVvrJtbFzL7isPGNMTPrmkL1SUGkCE34jbNGWH6RzaX7sLwDEb1wkvBw131",
  "key20": "3KdtusTvqLYmLbhdvavh2kHtb4gEkjeiQym2mPPbZ3X8zTh33AnTehSzA2ma6vQ9PdJ2QV95YaRK7Cqc2UL7LgNP",
  "key21": "6quAbaTHMSGQE7kAMuLhQs2nNuk4s3F1UpkqRVdH6AtuMZQ2gNEpdp1pa6UZN8W3jJhv1KLy5M7pyzvJ6pdvneb",
  "key22": "398oKB4ZkU3ogM7jqM4koLU93xnKtoYZAe1jfc6rqq6QNCmRDDYULwZuyqfbRtntT6UUjTf6gnwqypskj4ZUaFgK",
  "key23": "26hGPj1Wy6fDkbHyg39yDwVSKfZSUhCEJ8ks8eQ4qkNi191QmiyWkSDLXdFy6oQ4oPdgFXrSqcntDkBgKvmgtZ1p",
  "key24": "2dXF2CXzgZfZkw4sT3tMuYKxKqVqFVaoDntBLCRR3TZVT1yVUqToMTQGx9SPWeT2J7nuxKKHpCZ32fEEqVdUtBHy",
  "key25": "2VmUXybPRFKBTZm62rNJPPsQUsQ2pjpwb9fjRtG5vC5FUnaHkbqkX6QCdvGE9JUjiaLrU3BG6mAqTZ2mRYCJTRUK",
  "key26": "5vFuguF47ZkUxcVFU2G78gQhPSZDq1t7et947ebex5K82XVqstGS9HdCeiGtunP2ikpvH7iZNigzCaKGaiNhowj4",
  "key27": "bW1LvhBNHtWUsz8LQadFhG7SvVbTtZ4KF1TrDaCww5jbhKTsyWGD4bJYvCnLfZ3YUbQa4u3DQCuUtkJz2CPeatu",
  "key28": "3TFDbBgWVKK7uPJRzJ2RXDi1xNVUykesCZABBTgpB3CMjhvcsqd1KVnAdhzmf94BAszsCCts6x4ejhhe7nMY73fH",
  "key29": "zsioQmS8VE6TjFkJpktknDDvoKcf3EfyaxTj1DnkihRz3CbwwgK3AUuKTt9ZVDozbNe7vMnhAqRG28ATKsTnFWx",
  "key30": "2rCyyG93dhNfwR3S9Rfo3DRf8PTjoqnxyc3ZUg6go1dsGZL3SGxC5c2mhpMneJJAvcReMtinZAUTWDUqbU3sjSjb",
  "key31": "5fLCpwXhGqAwGz1a3ZyFtYsTctLb34rvFjU6fsba9PgEExtRW63hVbcCDpMr24hMQWW1WgNTo7J2eAddqzh5dXRa",
  "key32": "2bD3pXGRD1pcGY1DgkuZPfdsN63RYnWi9KjndawrJv2gmCLmeJWP6eSaiTyNasVFSJkaxkcaeg1PWVtiArPmaez5",
  "key33": "VPVEwkSFogHhZGtWbLzpewUnY6j1a2xPCr9MSrDrg8dJro3WCXAEqHzKD24UthorvPq5Q3F7fhgZtpqNrzsjqp6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
