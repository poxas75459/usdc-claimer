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
    "2aJztSapRL2BujFJLZDcAW3KKg3dXRwKJ64X9p1i6U37VamFuw7UYtVYQBopJHX6Xxs1Ua14qDTJd7pfhkJJH222"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wywk2Wm9yzJhU32kGW6Kw8wgWnt5RV5hprf3R6joaDvWLdBQt2vVVxpHMd78cbB8JxtdXwZPt8n1CYbnfsU4Km3",
  "key1": "5fwAZa8t4HVkiTbhEiPbuvaNwjM46UbHpVAbv46NzFGFezh23HEM9Zp1EfYwwZq3d4jVSt9S21SFTDiiezickUzU",
  "key2": "2cDcepzMARwadB4WNTyWfjbmqdnWhC32Zcfg5vLrhjiwvLPgVxm152ZKjRDFvE9MX7T73vMHQ9k4wpChqWZz4rKi",
  "key3": "JrSBePBQHp34rL1Aiqmm535hm3Z9sVhNBUDqXkDPX1Ht7Z3t9vxAVFEWyNm1QQHFgVhnrmJpysKR8zGDuwDb9qV",
  "key4": "3Hu8peqQ9oRA6EQMKe4S9xzpns2eF1fnS9Hw55ibvZDanpa11itKmUFzcLimN6X2L11fWEKqLTCXo6ULcxa7Z1dk",
  "key5": "5Wgbe7iEnWncmNS2gQz9TGpCFKKTUQtw4fZgk6UHqMWuQRjEWRoUTDVNLHCAPqTjPn6A3B6cDMcLyjJqdZDrufFW",
  "key6": "5AqrC5jUwEVfBemujyHbVGnLs5xXxQTRAmjpRFFawXf2VMJuX3c559koJ8FsGCL5NXURs2obSEcRGdhPKSaQH1Rt",
  "key7": "13LsoPuPapBggMe1RuMzAffwbRTpFtyjk9AP7CAHSz7HSz8pDwZvd2d8LorMwEHuztr1r3AtZ2edNxTyHTZFXs2",
  "key8": "2gmDGTN7U8PGD7aVUa2F1R3x7kXs1zgFgqzG2qRARrAnWgbwfWAorXZJyya1hdsNnhU2B7PHL8NUvF5WSxpd1kTw",
  "key9": "YdxajBTmp2fbUdtkoANJ75o7FVeGTTeNqKFeQ7YpACWr6twkRpPXP5MUcPqB7FdHeQcov2zagm4WwShdnjx9qyg",
  "key10": "4mRaK4RKKfCrF9RPrU6dUoKuJU4bodfgBT3Q2FYiB7Dq58q9C3qdyHZeko4jHMXZ2uSYRivvbcjBdXVaJanjDfjg",
  "key11": "4gyxqixhLatgitZd3ybQa6MZCaJ5uYzy7VmSANm7tGxoWPLtRBbGtx4eHhDuVFdrPJbg6KCib5wdymJBWRot6Zok",
  "key12": "5QG4ERv72bXrcnnN15fRDvp7h6yvTsPK7brPWSTVFherMtR3xXmEzZXTrPUoovQxVM8GHpfJccEwjq7xnaRv3fPJ",
  "key13": "36JfM3uFKx9BUhqAyz6ZavjdfmPznMQ9YZVZUsQaKKUagjd2KpjpCweDFsyqyFT5iMdaJ9GEDdneFkZ6Yf28QdmF",
  "key14": "Q5yQ9Ygu76SEmWpkvYg1FKJ4bVWY5VWWJXZWoDtE4idqqukPUDt8R6xUDpbdsGCydBDWkhx7NDGoxKN7oWtZ1sJ",
  "key15": "YzmWqiqn6TTj4buffKiNW74GdxyWGuVBUr8teX42ZU7ZEXuTE8coTiuk1JmiDpwwnYXBkhuKD3dr2SUirEx2VVJ",
  "key16": "2kTYVPokDJJ2Fc6DddqfUWhxogmGcVytUPbdmeTMJ2MZJkVDAf8F9WSQMmyrwZKCvn619jUMLxoo12Qwi3LnQDLB",
  "key17": "5PsJ7wXGnof55ZaLG3CxxECBTtKhDmtA5vjgScAZbALWggqnLkw2vt6xBBK9qGqrW16mL4znsnbBuYB2t28Xnh7Y",
  "key18": "38QBmYJMvPZuUJNT7tHc9nep8H4vPqze2Y7UEg2DfevL2Mw8SjDgTVFLUN9HHzdcjCGa3tPwZSY3Cah4BEFmhrM9",
  "key19": "2QukCYxZXnubkAqgM55DPmgmxBptp14Vd3nqRMuqRFvVHBnjGiY2B6VbaVznjQwGBwpqu49KjoFytpvC8xodipPV",
  "key20": "3Sxm2PVX4r11X1DgDfk253gzJWvv1ZuQhz626oAxZVbkvJ4kPTdHRyM32tce6hMBaWDAtNvAnNqx3p88PM46u9nG",
  "key21": "4HtyVPMvthEwanFeMD7Chp7uezngyt8Rc2sZCwrtUU7uQv83Gkr9kpZdwtZDv4B6crxCH1jxgGVyMgCbejp8XJES",
  "key22": "4YG3fW9pkMmyhiYR96FDYioJisKXFCY1AykHzSTYYLJJzWdVgtK2jTFcyYFmozXQBrAAT7P1v6dvdXx4v8dn3qQf",
  "key23": "51dLz7pbjUpABx8JphMPJeX5gvtSQzUQe6fyp7aRinzpcsVck65mrwBsxKLEnErXBcyDX7cp96LsC4ovVhiTEhC1",
  "key24": "4mrG3UWGjTHHRJP14cXLVTVeGPCN5kjcC3bMAR9vNMUg4fZ4ThQbfjrfwdWyR4u75hvfyZWWTKWTVQDijk3Sr1x9",
  "key25": "wqTqc9ZEcaQtFv8HjZpfpcFreQ1NcTV6zV9wFYbPqdc6WbYkXUdj5sRRPhhjMhHHqqU9mN9xDm1ZTF9GndixQDB",
  "key26": "5Rbn9Usjk6iq8Gau5QK1BdCMUHWUtm2JQTfruNSyT2yMp8LutVRoDsvFWDn1yLGrJ44KXmN4Lrjd4JBMpPMCDdZM",
  "key27": "4SAXHsZBTfAa7cM4B98E5aAuMtzW6PhkR5nnoF66RwdaKX3WL5q8XkQX7y8onzLSFLig3A38HD9JQvhyP75ueFWa",
  "key28": "3pYaPpf9b67UvppwSpLGhbHy6NaQCEPYqC2sGMh9airaRJYVeCZD6BGcg3eQNrMXe1YP6MLxtHMzkWH5dmc3YtJz",
  "key29": "4ntbCbg7rGPdEp4CsQi6Ut1qZncxDJoGZ1mS9Si1DBjuMKDbBeuibj5MpjPBVqfXHrsL8JEd6h5aLgcDSDVKSYiV",
  "key30": "31nnsnpMvoQ9vaCRWZMNFLwn3LBtoEJbznwrTgBXsq3MbnV7mEEzKQ9NkNbJAkavywxsSmiTokWqPWeDAGpPQU8p",
  "key31": "5co4xd4whquLzrPsVWCDUj38zBsw5cYj2PukfZzpKmtHA2P2FbfYa3fgVPsraJ1mANbGEQgYbusReHCfMuxTHZjv",
  "key32": "4desMqGvkeXDpKKiczAk7ZPU34Vf2FJicypfnoSrZ2ABTL79mvydyG7JtsAAV9zyke153qU2B2ZASvD2nuvzdUdP",
  "key33": "38FtqGrKCPkoSVTauVg2srrQ6U9dV3foVmpAxvG5MK9hwjtfzdXofFc4TMbqLYDCLU63FG9AJ4hG5L92opJ7mA95",
  "key34": "3jpssFXfxPfCJezhxZ7HbTmpoZyPbggfpHqnE49M5TfmRgpAV67vVmXBs5yhhYsMxaSAMXzZWd934Gp5iFbvQKtv",
  "key35": "FMpkS7dZDxxmetvgjFQ7fbLv1WhVrAtm5FDnhSj2cTGJyi8bmX3bx2Et5t4JAHXKHrnRBaXjdjftz25Nd8mETtq",
  "key36": "2ayr9UNVq2w9PT9bCsfwm7NSAGWnf3cJD7GoESLZ9vYpxVa13QsxfGDYN2mkSJp17ieFdavPhsxJS9K91QJDCcXJ"
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
