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
    "3ckfakhdvWVWrr2ziQXcM78gvsTANH8nqc1PiMdyPtyoHi7dDtx4cHoRPpFUHevGEyCZZMusKg4nijauvvUos57D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xjzhdmCAHaatoNgve8SWtCQEh8kijgcdGRdPJ1HfoGuWYFdzVTebKrKzUymC3EqdJ7d3HFjvXE23J7q8S9HHUAS",
  "key1": "3WDWNRJ4a3hW9xHwrpBid6bwaKFhLYQSBL5EyxFfn8fT6DxCbFMSjkva8JKJE1BZ4DsKx6PFejFdSc5LG7o49XoY",
  "key2": "52JVDq5gb9s5jt6CoMpS1HJupcZnMP7Xpedm88bku1GTNHhrja5AY6dTCnytLP4wYQxJRkw3LDVM7CrCcNkoUfDY",
  "key3": "4HyxfKAMz5FYEuhpV5XLSSSpxBmK8CmS8kDNQ73doFas55QsrfBfKTsdjYeMrcMifch5TFfZa9WrnuEL1H1ARJnB",
  "key4": "CV1ZyyTJcTovFh6iWgPrzCxx7KhLm4vBch8Sbb9G8poovzxu2X7ZmibwATqRyhqAmsAc8nGhaM2fZESPUTsm5aH",
  "key5": "izLQy4kPB3LtqwdwJBhkiwtJEryxoovqfEsV5kMfazZfUHUC7FjyLoNiFu9mNaM8dx1HJN6GuCTC5G7J6m41uNj",
  "key6": "49f6czxvgeXbpyNp52uUsLwzCBZgCFGTu4sA1euKz7dhqXp6piuEsvK3Rhd8nZjoTzvn3UHtF45DiBdq1cimLpfz",
  "key7": "3gq2xaskrLuRVWwoPJtqdX9Ra1yzC51fgFm9WChKdZyNyBNmyLHqKoHE6auigVTvXvTxLUAcXcQff9eWMugt14XD",
  "key8": "4mF5pLFhp66FtjcaYv6gRcE1eTNGqr2NU7pcCNMdJrgRrhiS1e24HD8PjLPjomZZGAUJPrvaRL9Qy6P8rWnBEfhg",
  "key9": "3BRsicLGBgiaoQaMXJWZYAkvaM3e9QRa9B8ogSReUGRpG3UnNkLDwF3n6jS4hQqBVvqBX4i9r6k6AXaCSgyNLZta",
  "key10": "3b8LU1KM6mJiaR9728sTbi8WPPzzbBge9TRkZmxqoCuU6aXQpEuRAoj3GLRQrvjTjfEyEGURdBNCX2Q1tpURAYgZ",
  "key11": "49RR442ggasPYJtnvyGWJH8JeXwL5w5oo9NnJrLCFBoDpBojbjp2m9hnN1YSiv35Jk64BmNqkZXQM5akXP9YiFaD",
  "key12": "368R2vjD2Hw3tBZiapNWRWFTgUzaKVLSH5V4MrANRGiHX4qa6LPjAdCq3EikP1eocsxAjkLidmQYC7wWXJSTcFMw",
  "key13": "4mei9Gg1jGx8SCKMWXHwrq3U37jU5TRQ9v7xvUZB1Uz9QsbFPRhiSCzFUtuydF5XGMBfnB8vyzpiphJeKmbQRTSB",
  "key14": "oYaN3mvN42ArVETnuZxrriFWRDdT2SHkGmoGBaMe6Sxx5tAGEAeCmft2teYSsuEwMTxc8ugqtdhgi4MkPhvscSW",
  "key15": "4kP2UXupbMivMotrtsrdgAcGZdA3BpCQasRvecsmmtYQRFA2sCGnsZQrVDbNA76UHnBs4S2cvkgNf5tcoaaa3PYL",
  "key16": "3b3QDJ17axD4dG7LeA3QpJvgPiNvLR6oULtNoUbcY3JwGKxy8jpwX26ZcogyfSB9SHMo33chuK8nQsPx2dnwtDqb",
  "key17": "4V75ncq5T1hkPmV3eJFeJHXUJXYh9hR6ngDDLkEsxv7m97tQaEFu5kuPGQM1aeyLyy3A4ML4g6qiP1nXC2LpifwD",
  "key18": "4PMAK9rhzPFkihteacCmpHFnPxGhfSSVCVYuwpEGYT7aZ4WmpW4GuwNSigBKjh8A6fqdYKeGVpcgqkPYqhmTooCa",
  "key19": "3tHjsxRXXFzK1pVnFnaVsvCuhBwviRdse8BoLTbsgnKt3GFZZJaYEZGd2ALrZz5tidQr1HVbpWcdXhpBCRVRpWKe",
  "key20": "4LXnFTaSbbH2LenG7MLXJxxarcBxKZGCQpQZKcjfnSymXZQ6D1emHAUTEn3q1dUoqxiuZWpdrz1fPDiayk92F5Dm",
  "key21": "5jPceDxo3xjV942yBT6kKKNS4n2TEskyBW1WGrBN3cxnhVERhXMF8HDhrrpoqX4LtPvFErtncabfQa7ZKu4VQym7",
  "key22": "5593oLgrQYVRUaFGh8LEmvPjqjNfqX2SkVWPitJYC96Usnk3sbsTJEoPES1Sq3nSGbrJSyFYFqzZXES548u3uLSE",
  "key23": "57yysc5X931paEuCMBUEk7oZJ9ziqUcLT853TpAPz58jqcFh3a9cMLZjS8KNTQ8VWJZ9vTSPszjFSKiPXfejVAvJ",
  "key24": "6i1HNutnEJfVYbikhmNAKddEkVvpq7ZMruXE3cwxqDCTLRnW63HwULpH6BwGk2jY42KhuLfJoHYBgSJZuqsaxxj",
  "key25": "KXTRePMAim5tK47KY4H9ELPYR1NJpey6CpZyVskpbhmBMbHahci7NMR4F8tYbsSzqqMaFJkGNX9kfSSpnWm77NR",
  "key26": "4KdgKS39TYddUPwykbcU9K4H4bGA6EZuXdRpwNWU9kjQuYYcLD4WyBG7Kmqt8QnydvQ6gZDSsdDA6K7AQyYFXK9F",
  "key27": "5jd36yGwpac5yjfr85yeMpBDsMK1ANNe9hmMCCBxWoYDBXYiSPn5irSqG8zKHvKvqyvixwNoq9ziVJTiBQTXu1yk",
  "key28": "3G9zoTeZvUV5kkZ4i1GfZ3YbCe2Ety898TbFvphumZ2PJJBbyn5HJzmXYexxtr3gDL9t67dbsezrJ2qg9Cp8svdH",
  "key29": "54YYfJGPfdXqqwXEf4krJs5tiQ92vqoseiq68s6JWd9Dv5NTE2ak3N2Qfq4r5UH8EFV3gkXMWzyHqm855D1UHSXa",
  "key30": "5jQ7gk1ToVFeL5Vag61ThC7ZUWe6ndbNUooyv4XQDVX5nef1bZzrbSUw3fcYZTUUi6RaRneDhtS7CFmKg4HCu1JE",
  "key31": "3CZP9zdSkXr43mqAG5GPiW8GDXVbpcPZdcLp8Pq8fDVFZmH2hpcBST5ZbrULFfMTu4Bv6zNHty1AZBLkBrmULze9"
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
