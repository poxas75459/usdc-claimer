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
    "HSyzCUGia7t64JXEWEywm3LKs9XbxtzyV5gdUxEXWfTGJPdsQzc8EQupRU3X4y9fwqEt4kVUNntcw2iJSo3bgrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtqW6v6HJYbWHwwkxia2fG2KcHrhonYXnaXenZtfuYqCuU8Atp8tDhXvhcj2ndefEkuQy2AvMRsAyTS8oT4T4y4",
  "key1": "2BCaHWqtpGa5VHB4fAVQE7MsKrt1z56TxVuixJsrPzn2K1CN3m6PWX7h5CbuhUhmitHpEZ2DywtZUdFv79AUpfR6",
  "key2": "5Qy8KFBpyV8NFBuo3dmkaQtCEYPANSoQENt2mQyXLwMyHoEbqBh2Az33MDomsKfMCz8mHF4QAGqZoSmtXyHqQorX",
  "key3": "3regD1Hp9UaKsQdqp1NCeYPcYNWFRRUV41tvMdHFyRPEEuVuLFXqmgjZA3Hdfbbg9LdhEmj74rbBMn2t5jAyY7fR",
  "key4": "5nVChUGS1kbdGFc1BBtK2vucoqSie3v1y6zvvkUh1Mz7ZQDPUpPiEMrAbmjpXcTXFFQ1Ux8rF6oYXLLfMeW3J8zR",
  "key5": "5G3yYDspFngv9ThTUTgX4d5n4eH2gHR2tJrnBxcw6qJGuemmKtfNoXNZ82GYDKE1eUWSWQuM2rT5sszkr1kVY6WA",
  "key6": "31Cj9fjdD6uvTidALiZK2qSzgwGmrGTCMK14d6TaTy2nRQEMTV4ZHFeETd9viz1itLYWfZ5SsAkwmWbYb7134eH4",
  "key7": "5vC14iXibmgfqyY8hLVC7TzVxBvAnT9iEdS3EjECvKBSRH1fRovWnCtokmr1vMRk1nXbhpp5Ca4QKC9QXkTcHAve",
  "key8": "4JTdBRqQWHbCJdNma5GcWi9N8xKWaBuwid2VENRrd1hcgwaKdH8QCHikoLp1gwAK6T6EJ1rVzdXseccqFGeCZvf8",
  "key9": "37H2V6BXoUcm7Tihjkhd6X7TknZykFwLn5CSSXeDRJnymmFZdJA76byUUptCX7mcoQoseYzVU85n7oWhv4Dy4SXa",
  "key10": "5kS8aokCeWXr3XpX8RJ8GnqDHLEjMLxq9SZgaEhWj52MChSDkor9TUMBqAgmqBop8c5D4jZUJ4vap2g7LFGLUkte",
  "key11": "NvEAXJt2KWKnSfivHi7PDVjdfibmQ43YQ5qZynBVEC9zuGa7R13wpaWmTQY62qcqvWLhVtN51W3DbDGNBJbdRfh",
  "key12": "4MCYCt9hmBUwpFX3CSQgJsUXTG8c57PKc6go8WVpzx8C8Rmxn29L5JXxMeFtPw92PQ5S9yMJg7HYqPs5xsRfzoq",
  "key13": "oZSTSZvetzx9uwk53rxCy12rffFNDdVn5iAb7UrsnniBFuJJVZWXhQfeJh62hpZTRANvvTFK8bKzk2pHeL4ksYr",
  "key14": "29a8KqVmYDooJkJZqBMnoQVxjzb7s63QQdSMiue4LvwSy3ZEa8grf3nDE7ud9Nbb89aCuuaRGHtCS3x63q9uKAMw",
  "key15": "2oSNYdb1D2cgSwB9KmnK5zE5QzXTzmMYqwAcLT6u7TaDjh6xTw5rpBzjyRm3ZrNYq6WRKwa8NsBsGcfyYSRtNZ7W",
  "key16": "FcEJ4hMjkRaCSVAFv9JNQ2DXYjLe5qnKMc2rHNGkFhM72rRv1TxSJDiiDuvFQsc3Dfhvy8Zytoaj15ee66TJ4Jj",
  "key17": "4XgD4rEb3pwm9psF3GQHGbxCDrSRDDkuQdRB5ZKC1VaP5atyKbcGcJ19yMp9TUVKSjssE7L5CVW6gxG1TcMBdLaA",
  "key18": "5X9KLSyQkXREDzGjTLjgUqPgyHdW8PaQ2QZ7oSK12WnYDtrE6Jnv8verBkQMzpXJ9MEGwZRG1XY7tq9zvwMZLoeo",
  "key19": "2YVibouodYELhHjH9AowspLWXzYprSt4dMpgXH8AJYbyz37haR9zHviSTwcLudfpkCzncEiCxpzVqszTYs6sgSju",
  "key20": "5kjsVioqfZSisftVhdUgHcgrszRz7M3YkS6DF2k5ptxRy5sGqLksgKpGmEiw9vHDrhQj9CungcDDpMJG1GhrDe4e",
  "key21": "3CvByRp2QWRPrqkdjGAp3g2paD8PpeRBikq9M55QvLWwt7n7CuKPD34dp4qi7RvmtdXrQ78GbcgMrGzJBvS1Wexz",
  "key22": "2zpzjU9rktJMNnatQLmmnBsb53YApMJv1nAWPd5RbvPi1d3FbVCUD3TjzBF4TCbi9vvEbwvGwdDDsgUQ3gj9y38s",
  "key23": "2tn3RZpyXGj8iRynAhvSurtMFQPxNEuyPKAPwpwmhw9PCrp3feGCygXj65jcSax2VWBY9TLJp5HoqvysXSZuaapT",
  "key24": "5sRim3VsUXGA4ytXgN5XxaQ1w5TUwAmd5n6tprRBEiCM4uuCCxFDshCa67DmNZUiTnwwgVbTRATM2sXkC4G9Nakx",
  "key25": "4MJAmwTo5NxgDMnVGk9rZbEwHvsggqBHS6WY2KstNoxpT9jnzWYy59HiV3i5ma4LZqinM31ysVZceWtjj7XKRron",
  "key26": "UDw39nubh4GatrFCLum9j5GoAAP7VwCXFhqbCV4ijVHy2rk3xBqtauGafNycPg7jZogVPWSdM2WwgiZHm8sphWu",
  "key27": "dBjqMpVaUfEwtFvn1sCqktw4VtP4vaHZi2oKDpY3BtojAKPAaHDkGkeSfgFDFahv8R4BJYnAzrWuwJA23yc3Ntu",
  "key28": "Y8G82ZXPNkeL3ZbDr59kBTHutRSqFgvNx6j873aV2sqVCEytsRVANyoUP4Qcx1iceFtbwrCWsJWyBxXngUiybGt",
  "key29": "4RVw1gAvyceJyVM86d5pRE67MWPZZ58HAx5Swwpme3TET1SRueQ6zCMEEwqf8HBToBTf63Q2MhLCAJqVMTL7bd5F",
  "key30": "5h4oGKqiL3qBHhiMwABJ159wUtWm2HmEHcRt4Z8yxv7AbddUZXsegi9zURQE5ABy5kH35nBecNd2QEjiDgxHVCxa",
  "key31": "4acDSC1aZNauerrHzvdWhfFA5ExFvCNQtNEajxP277TgdGJkWES43CiAmosxKcYYfJZiBSPLN97FuXC9oPrfinsA",
  "key32": "2Q2abcujpfc1TfuchdYA9UeNtdybYa3L1ZXzHz9f7aneHeFpkbZZNRmBwx92UDQ94MYxwXKBfGRbPEjf1SmLvDfx",
  "key33": "5ihR4wMdmMi3vs13RjnEMkZwxJwyjkPCBMBCehQKyKVtsha3K74c8jjWfLy4AGiejG3acRqyEC9ZbhssmFA36Mpk",
  "key34": "mGAMvM1N4wRMaYEBTg8ncYGdEsUwbbRVT2Mvb6acD2tkkwKERyKpivuCypNjoUm7nuDRLj2YQ77K1kApQnB3HkF",
  "key35": "QmVWsxwHsuJ3Zs1gV5KHFP5skwUKMjU7YXtWbStKKMgwftiPVmYvNEXbxDkpnkB5xGAXsjtDcAVK2CKXnGPpxBq",
  "key36": "27neFM8qxLmbdCzUmzuvMLamSCWWrmF5DfgwWMZTtPsn9oPJg4SoZfNU3fiA43nKSGT7si54N5AtEiYo6hRecpiA",
  "key37": "tD2o8SjZnF4U2xp5dJCi6H1iqB1PBpBRtn7Rpci8LHpTCVtHHmv5Cugv2yAr4AkjGDxbF55wCkfSBGZ5shaLx67"
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
