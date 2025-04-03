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
    "5MEUqSHF8uVDmzhJPpJH7GCoUNTyhMjvhj5UZSawPFzvcnqHjtnhrXPkPx8uWjonGKJMSG1UMSH6jKv55rS1HQrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZC8G5tJuQv4t3AgsUAiPnwqRPGQToUpdmiMTi3ULsKwts8gExZKY1HLSKFa5ZZRmAYqTy1HXMuuGo4soKxfrmKf",
  "key1": "cGFthPJqLEnuRVqhwc1gcSBeJEq75DKoyXXdzBT84SfY36iEmiXBxF3PGCbVHPa1bqPAXhgaWf6vkoyJDnXNjHh",
  "key2": "24nYtfcczBkMcKjzTR3w7dveWnxpzvaT3bk9T9JN6kRWGVjKNPZL1YKeQ4wBLHU638Pgr8wPV487u5HRCtKEA8LF",
  "key3": "3HtKeR2Z77dpNUA6LovPEbqJSvYZ9m2HkKz5MXva1tEk4QEvjUK2bz5sLBsDfzRXzrhUHf1KRMwo4QJw2W6jno8q",
  "key4": "5ZeQKYqScrV5vM8udXfkwr3pWfvgqqkMcWUXy9TJHvJwAEVnewwPSJM6VtaFb96dZ99UbsTiWs9sq4DzHwt86Bag",
  "key5": "39bCDBjvskFvP9tg3KeE4UFHxQYBPrMHnjyixXbCWZ962kBm7dNv6BMxdT9FckjSgPcS4yKUetiFGFF8HcwPttSk",
  "key6": "5v6mis5EhKFRCV6gzkUq3EGQZuL9bNMKoceiSpfX8SjLockuHxahPJ8n8vE4rXNwxrjUUpJKvbxjgSttNDbS3Ry5",
  "key7": "Zku3YdcundxKqKTp1XTa9zuezyLSzkJVN374fFwDMnF3xVUHp5SXVaGUTGQwmy3bXPq7SoCRUUwDx7v2DCT84jx",
  "key8": "5iffu9Duc4z6dA8xnE7JQYyVejTQYbhNHAWkdVCVEgRaCFooKsmuvy89NRyCHAs9F81Y5pGKajXDk9Va3T5vbsEv",
  "key9": "2Wh9b2f3aVVoGbtRR1wQkpQkWZ6XoEK4Xi4rucDnuPoYkwnLqiLbHsNkdavQXrYsLP9bv6cAAkJq1H6Z9nkZjiSP",
  "key10": "3tEn8Negjd8guSeDgMK34tyktPUKS2LqbSuXNK8UZNuvnLRzf4vWEwjHfrTPsRcgTLYUU7CCZPNwyFLqUSvbVo3u",
  "key11": "3fgVJSBAxz3hvHQDV72XR7XauUAw6i9FAA2GrofFZK7Qk4MSFxH7MgokonfXxDvUEQwwbF4wMzy7wVGQPKs8uo4o",
  "key12": "4ToLjed5JRx8cZEds644vSxcfdXnfRmkmY7eBbid84T8BdwtqaRnQZzRi42zhwffNuLtmZhpixTpng87rTYz3E2B",
  "key13": "5psZfSLgnsr1inmps3Tpdtbm52CeaTusvX2kR29C8H8ngHUSQ6UQJ7K22FPCKH4SxB297sRigEQsLzeptsNpTiro",
  "key14": "2nGwMQhewvunoKDprosNsd2iG71bajDEd19EcPcaNG2iVU4JJ3WE23J5GGiZP54TrSKyn6ivsG1s5pQvKPDNk2B2",
  "key15": "4xZofhGTWUSJZ8gTvgBEp6vumokWQ1bEXUxNrTupcuHp11jKSku7DhomtLQ1Qe5vcxmQuPKn8JBZCNqAaTvME1NS",
  "key16": "U5NgV3T98CNfFk6n1D2PEhhjrHTQgbCyrd9fVqABGJKk6sCqZ6cRmdQsfLj8AYCX4nSW6QLRsBPYCLtzriMHniw",
  "key17": "ihLSmSDZayvMbzkgELUpC3DTuMd7U4yeVvGfAcWvpr7jVHk28DpR1U7nKevBjpzS8FpBSoQoxSNhncrEs4kL6LJ",
  "key18": "2gVuhwryF6cGjsih9D39aLqcpChXafgmH8jiwPMcHDv2DXHt2AKj2HoQsNVjMgMGUbao39Qvpu7oT28ak8oU2JRv",
  "key19": "QhhteGp4uCPY1X3z8bQyimy6r7taxe1hvs7KiD89GGdoyHj5y2gcfqUTmc78azbzZGTMTFYM4pJ2P9LdKx7UBoP",
  "key20": "3qFcvSd9FV5U2pBFJWnfMiUiGpU4qCLw95pr8UKHssyHBcARCitFJAFuaLNE8T3uidDb8LR841exSPfkhk2umZJ2",
  "key21": "2bU6NiuNEpKYdo6AphsxAWJ4A9ifzDERaXWiDyXhAM5EWUxx36Ux84TwxKsYrtFG4LuNMpJ4CgBLDWy17MMAsTco",
  "key22": "2WHGZNRJStBQZh5U2M6U6r37ja25G9CQegu861jrCRW5SkG75hf8UwP99MBWViijEtcoTEZGMEA2D5C29duZ12EX",
  "key23": "5txjtUsNQEbJTyD871BKxwNvJqMb3tuTUBoiFXdPGXRZ5TJjiNXpKt7jNJyARnJJHxvxL7eTrhUpHDDjD3e2p3NH",
  "key24": "5UcLH2NFibkoCfmo6QboemYWqWAVqfiVWB3jEQMXemT6KzzYGEmFdsiUWzynBxg7bnZ11dWKHUhumJ7UXUzutqEx",
  "key25": "4oDqhawcHbXCK7vvchd56Etxtdvaxes7SDGgFfyDWpMFYRTB1ThDJGMxGRBHEMA7kjKjWWJvPiTF6SXFWB3bPTr9",
  "key26": "5W99iwmAinzDi2uFGFP8v2MN5BqEvfKPYT19UeSGwB3FKJW9nZyx7UQTRbPBkyT1SA61BsaSvnApcsySTW7z4pr3",
  "key27": "2hB9LHofzhggwKVMwk6K9YSNyK9ssGsGuzrg9i5xhQowcWeNGEZb9ofA1hkUugD1MxZZcDM6Qhm9BrdiJfiUYM9H",
  "key28": "3SZ9RWyzGSYFgfDDSPNfCzV4RckMuHzSAnF17j1Myr7ccCM8vs5QEjm3nqDeFpEh9Ku7ksvHphEyehoEtVf14HoL",
  "key29": "tFocCkdfcryYoHdrstg6f9qUckzt4G2YkhZbLRUCqL6sn8qdp93kDXjzQoTuuqYjB7dQECewvrKai9dkUg5vw6k",
  "key30": "326V5QCuwo5MmCdxeWJhSvppqdatYJhuH1yfmbGwuktd7G8aAhwFaboRQCwJRneaBvYcnkVX8L4VQeeNyzCEpcPU",
  "key31": "5GtLwTCydHHEJ5b55HDoMw119ej2tZ48cRWdsvxihTgmbfcfVHnRX1mQKz1bEe1qyQJFQpjARkxoqWFNhG9xW2e7"
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
