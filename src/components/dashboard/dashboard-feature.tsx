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
    "NgYvLkCQBFZkLGWZBrejFQgw7UHPmsJUDw6AgecWBrozUtStXuPT4TAyB7rrQ2gp6rFoisNg9HTDFK584HRAnNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B36FabEuf1vLtcgrJF8deTHKjN7xNdyo1WkAXBaXPnGFYWJkA7kKpnBmXHMjxhD8Dc5mQwDt1m5KhgU3WBQgLy9",
  "key1": "3BMVPp38cu82DTVYRLZhAmRhwgwShZYdq6jHjYUnqXZt9y7XqFikvnmzDZjyZesSw3hjW1YfvdRoJmAdddhrNHDs",
  "key2": "8auG7A6vk5bks8MzhrKy9918kr3tawh9WfJXuf5SMuKbc8aMeSmVYKkZ9y5D7B6GztHoEBXBcEGSFUEuYbSSmLw",
  "key3": "4sauwFD3esjg2p5YkyHsv7B5SHKumKm7nj5Q83jcNwdHg2DBwxa8MgJoPufBL6oL4J5Wp8MwrWDB8awTbSLSXR3K",
  "key4": "3jQdHZ2hsRstK89zEYfwD4PaJkux4iwee59mqSCRTpefMorPd1sZzfJdvqsCSpbYLtepWwH2jU7LmvShyxCPMbLn",
  "key5": "44hAS8uRbFveHhVuSN45r1ATgM55bL5i4tJDpCnhFxVtdyjDZefX7rF6uiu5AaKKnJgRnSeiogpqzTeUjf2XrdTb",
  "key6": "25xqsm8abd7aLZCRfKzmaqosRTCsU64eKqQ5mzqSXXkHn7DUbPFufkRQQ7X2F6BkPowEjXaow74ZcN3V6pdEAwNa",
  "key7": "2S6jsssM6qXwErxcEC9XMvWTApTSVsmQXGxfbx3GfSmtntCLiRReGqaYj2XDBZ5FouZhseVvWNbE6BwF9JLYDsm7",
  "key8": "39P9qkXTHSUmpqaZA8txWJHucyMFst2v7eaUGP48oCLthyApQ2jMVsbPmGxPSx7YjS8k7ho37yHsRqq6BDE3D6io",
  "key9": "2ESAyjZ9hmuBR16iH6CWj4q6p4R67HXFvYYcgF15oyRRG9TyvsYHBegf8CiJEYsPny27GJE6zVJkZVmcJN2A3PBS",
  "key10": "zgLbKWx3XUHUGhTQoTidLRxZWksqzagJAXiTVLUEfAyaUD3XToEFWf5tA1Aw6TCfDh6WyAtraqMnpbXjq9SVhU4",
  "key11": "3P5aNgtMWyiadsvCUqQFvNAksMnUtXCpPBvUbGnmhpBWotXhiadjSewjLHQtRvUqTGRk6aKmgw3stGpXumGX88Vk",
  "key12": "54y5oRfroxcV3yNGmPXmfwmGzUUhhqzr78tK11m571Ln1wnYBYbDxGcwjS7QvTo78cWQojC3SQLKBS5qAyMajbsx",
  "key13": "3yuHCmV79iy7o5jpGwHqhBqfAEyKJx8ZJidBo2DpCbmUYX12zm6zduDZz5TPX7arv48MvfXd46t63AiMESAeUsAK",
  "key14": "EQCCrSJ4Jws51Vy4vFReG1zp7eBLiUTRswDHzapn8iFpvqGKJJJcuzPCvN3Qdii4vyAV2kwNHCFwima559ftv6J",
  "key15": "3FnBXhWR77WMjTCZFzs1uFYg9PX71BcMMgiwiKVsRZo4QDHfZDvBVkbd6UtGWxEheT9WUhrrpsNHXJaJGCSSUQq1",
  "key16": "63LkJNKyeJyyAee8rFc8JAkQDvYU5pekehRCY3g1T57oXnSQKp6AZMM2oXFvpLH3KNNJUrk6mJYztC8BBchyLbuH",
  "key17": "4DaceAb6jhBC3iFE8cUvxi2hSs1LjLUhCRTTiETvYAn22W1auK1yjAANfCv5tDfzSBmdgDfbdRw6TDsZuBG6eS2S",
  "key18": "3qEiDyn6NSo1jKP3q9LsYFGTmk7QRcon8Df2DSSzZby7wy3ydW1NSqXpKn2hB1QnqGSw1FNcrBFr7DrxATxCCyyH",
  "key19": "4V5DhwRnqmufFZSCpKZoaECUorKfaXrzteus6awQMuu3nd1co5KCS3hDH4UALqqDt4fpUjYtskfWvhofdazZs8is",
  "key20": "X64vHRMySG3JsZB7QPRCZgZfsekSjaLocqWybFBuCS9cJ6cHwsAHP7LdNugXbg6hnTEMWVPKg5iBVUgH9fejUVW",
  "key21": "4s4Eh87yZfNDfzDt8pHcqrZ4cvpKysTPmokAfSbc2ERECVB3oXPRaZvKwjfQwKvFGfySzXSV2EdWp6AS57cp2XN2",
  "key22": "3A1LpQarixzdBAc2FRyFh9VmkBgavFyjGzBgaTvy1C4wXdVugWi5jQhFc4uKHGCixDLcNVLezauKrRvL2RAfQsgn",
  "key23": "3QNZA5n3xUNgrjPjok1MFSjARfFtHRG2NYtoPR222EJ9kkDDdP5vGkCLdhz2J48dEw4kTygf97cZWZX8TJRaLrrU",
  "key24": "BJYcawEqkf1JVwbEkAid9qqKuThrCuGSkL5q9HWxs13fRsj4Gnro6MTgqurnuNP8xzSdtKpTAUym6DtzJZtwm1F",
  "key25": "xdA4hiYPNY4g15ECXuedn7kEMwmJhy93VmQhXxfUsGt5FJ55r2wh4acyvoyGx6pqchqAr79zxqAZaf7dPKtMTJU",
  "key26": "7pK13QP7msthrZ6LbtRqyxza3ZEPY3xTgexfkVSA81MdqEtnind24jPFuontfmhTJ9n6NczoFPwEQFGggQdHSka",
  "key27": "24tQW8uYZk6KBzZNzSRfrvXBVyZrwxzxRiEEHGwYZ2uJQUtrWsZaS3VbEo1XgFA7PkA3aBM3dw74dJbFxk3Rw3uz",
  "key28": "35zcVSqERFB5dFTcbhgzg1iCaLKZDYe1L38dRawzLiwXtqvabWCfNGrmfXnaxcDTMy4Mi2DjBiL4S59ozBtBDMWR",
  "key29": "4hAbjaqLpUqafY8wxUkGNNBpT3Vbpw33zND64k6L1Tr5oHYVV6VP3NzKCDgnwqaQ1W1zx4ARyoZjzVbk2LT6uDEL",
  "key30": "2csr2oY8Wu5dNjCxDv8TGjUDRfy1rGAZwRmLDoiD6UcpnJhTSjaPoU7wNdUsJe2NGFgYak8YoEVQ28Z3CPrw4YVm",
  "key31": "2M4NKZSkuHx6GYdCADTHkApUxJxqgB3ATGiNFiLmMZhrcRiQftMGti2MG63bfX23PEG7HReZSrV3Evc5ungxiyZP",
  "key32": "3Q5eTvGnjBgHmvXgJzx5QS2WNFZQCRSXG2mikHWx8XCVJG4FqxAwErYDGCuSyC6mGoQap9pHCjZP6s24mknzDwkm",
  "key33": "Qi7jLGFPHQ9ciwdrnPVRvRFtKNFUzpJBRaTzAHUtxTcm7jFNQFoMBakkH8ZLtRMSDP1dNNmUMi9eZrpvHKHJLEH",
  "key34": "4zVUWskhbQxP6RxzCCLraeYWk4FPBnVbpQ1GpVV1rtQcpwLnfACQExaeyuAhUN3CEds2qNBnhpFpxxQaUj7Ntz22",
  "key35": "38RVPmScRTR4iTydgGCqoh7LGED9VhpW3qekoSSnMLNVKZ54wrqJQJpJmhRsb5GNTW923CvKYc2GQ76Ye5kvQoxK",
  "key36": "5zkkPVc8xrYwph7FAYRxeAduKisqcfJPuzxy3sBUm9qvGZnkFRt2V7LCpxk84Ekx4regmHDxbxrSCfVB72bBYkNX",
  "key37": "3AnfnVmJMBQNDRrzyhpb3p4ozvUBK5VYTanLGT5XuHWqjHXtEmU9TtCcUWUjFsbH1Y5Y1dNFG8XJx8FikjQF3SwV",
  "key38": "439STkqiGMptMqR3x3naq4iD8bAETCb8CZ1uvZxzgCKCTmVUTEtF1n8CeNTmQpWV9Sn5pkrRuivtJq5sh318qtmf",
  "key39": "TcVsGb7GEDiGiwtH2yJML97LnARg2Cmz8i9LzhRZujCUatKNsgDrMW3DBcMb6bZRdbwm7WbiBxCib58wap1tpeQ",
  "key40": "MKosaPFKYhaXQhvjWwzjwZ2yWVGSp45kR8CXwPqovW3b4eSxUThHm3sVHXhFBrRzZhd21tKsgDFmqn9LJ4ZquE5",
  "key41": "3WThH4JKeftN2KhpnPwNoAeBXETHtb3H5yxXdg2yEAUUjaw2Ut2dgnieU1pq6S3WQ6N5VfB4UZ19FZwySDNLTCeb"
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
