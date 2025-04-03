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
    "24SAdWkmKHi1BezAFjRmxVapGuyiXMai1xgZZvZJPSMb3E3a48tHeJM8Kmc123o7Czgh72J1BHanndUfDKbAdarP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zfg8e7PthzDR2H6w3skbnbqB4wB1rHMK7kd4Q7hoxcnXn2qYS5afn7eAsLFtJ3FZnqiFxehRgK9GSBHwBhsi7Gz",
  "key1": "5qu46sQ27nayAmneymkw3xzqhGE4rNHVnPXPabnbDFstiwVRqSb3c5ZLYr5XhdBuhwFGhYv9hwCqAvQ3DkGLPgu7",
  "key2": "4Dn9SCwmc9MAPK2cbtcC4FZ1ZxfiHRsuHMMr66MCn9nmPfcwYedvt6TZcf1CoNZjLfM3ypDVHNE4qhb6cNeUeZ9L",
  "key3": "eE7PkQVBsWxvfA632QrVUsiQPyjB6s3KiFgPyhyrQrFe3v9RRPT3ppDR7d4BPHwEVKXGZY2WrRhHAT9x17XVXZJ",
  "key4": "2kJxvNRXBzKrxPBsgJZ7QLy5WzdsZ9Hke568YenVMM1FYkM51hg5LvnHWSwGw7LVaR8oC7K5KNy1QUmfho1qN2rP",
  "key5": "2N6ZxpUbuVUc7hR5dUhd21ieY2SiHZyU9Z149KMwzzbH8JbxBi9TkhEDmQX3uPd1CfaPbswgHu1JdWgKNeXGMc5V",
  "key6": "44UZEh5QyerPamL9vFer3ae43KrBWfvt8MFUoajoH9BeqKz5f16AnPJ7Kn6vxTLQQUa9goau3TLNCx9BenMtErrb",
  "key7": "3VeAntJNrPioAyNp6aaU4Pn2mdYAXLhTYxYdkB9fEDRgmxdXSA2NTsBSineQaaayvNSc2WpehwidtTH9kk9pohFw",
  "key8": "4YbtFRkHfAqbQqkiYtHnJ2grVVEQPDpqMgD9jW4RQnBKQWJrW3JLVbS9DUikvJpdET3a7pyhixYLnG3UFgFNo5zq",
  "key9": "5nrtjzUKHsqQRKEAmyHSaURQpJYLVoBMHA83JyaNp8QiyAr21LbXhztygAvY7V2AY4traKSPx4akDtMvqXuu5SCv",
  "key10": "521HwqiHp58eKu9AKUvqfKmexBxCzngGs7r9JJVtihhL69nfcJaQDdbHLSbfuojTAWoLyy2GryaFyrkV4PZg4UBC",
  "key11": "3SfK6M5tCGAW3PkLaCPQHS7snLgSu2z141hQzB9hpSphBywPSe4omzLV7L7dEd2VvBugbaM591anrj9BhNjjCZNc",
  "key12": "5dWG81RXfce2w4Vye2MMMiNTvAC2DahPvZjq8mpfedd2NdomTmJL2e95N57xY5xY6inuvRkVCkbvgnWMyGMNk4px",
  "key13": "u9QvP7r9oZPxiDvPZuJ9K8XrvRcthgvuXci3uTs1wJtZCKDwwwnp3zAS1eBeRNm1LcGNUpCuuFvTCe2mTrWkaos",
  "key14": "53v2sXvoRezHWEukNy56rLY7cF5YMP4MCdjiMeKiXsG8URqESFJxQT2kB6M6TmJrwrc1YkHmqm5N2UXjwTxYBMNS",
  "key15": "3ddV3o3wR3RmP7gfHK4Nn52GNKVEo9uF9BQEoivxneTNHTeKkdXUz9NHKJtyUhYyzdM5hih9UFwU38LtsygR8bCE",
  "key16": "3A6Ko6ZQQ5p1vygbMykvEw1NWvxFmVifi2hUgfsYkR4BSUcFd3rLX6y8JYigQ7jMqNk3Q49SzK9gKZarSAJj2mDA",
  "key17": "251Fu7MXzD9TEZfyfhtXfdFH8YmjyHpHR46HdM2KgnMEa4SytkvwbXK5V2mTH8VHp2rWj7g6Z5aE6NRGh1rH7qEE",
  "key18": "2vd4Gwny48W1Rp7P14X1KZkrSKJX7KCfFgAcQM3wBVydukE8o1F85cDoDp4tTiLcNU63ffrCPUFn7jSr1jjeaBYd",
  "key19": "3aGiLRiiHn6qzqgu3cZVx7P497isoaC87FZSwZx1AEgJc5umWpYCSF1AGxT44bzWC1429LW7jaZpgKmHPSzoTSdN",
  "key20": "cSepT54ixk5xBGJZQWAR6V1eNDndvL7JtqMdXvi8GiPEX64X94GdZBXqTrHovTHWq7g9V6SA2PJoKzrf3EsaqVp",
  "key21": "64cTEMYFMtTY8WVrKkRpRaznb9NpXmSmYDXADuYVqLGEoZYQMZdwaPRGSkzE9Gtf5VrY1dz96wwBggfCh46Xz5aU",
  "key22": "4uXEpHnvGAQd85dxcykgSCJRPbgBoLFq7AzEWybfEhhCFB4G81btEyun74trRRm5mQY6mdzY7aTrq57tYjsAKoTZ",
  "key23": "2deskenu19cfCptrawZCgwQzjz3XVbg8rryNFf57bggtFHLyM1RiFX6wKWuSGvRLZ3iBqx1d8pyMaLvfrf6HQMMw",
  "key24": "3ZWqcEakuxQKmdbwTaxEXvd7CmLvWBYy8QVrhuXsqR5sWQcmUdU1Kj9nLzV6c2nYZFKq8v8VFoiZXJBRU6y1Vguk",
  "key25": "39rvSGATk9ynJhfsNfaRc3So3fQPvSnmzfxYtHBz8qeQRU4ctUrCy3WbQDhRJ9nwVyjRE6nHnL2HhszrF993ovt5",
  "key26": "63w56qKMnDR8d14PVV8a9YS35K6beT6JtmCUGxHForLa92uX5dQxqMCHJSeen3LzAP9XsSCoKMCxoDKuiPaSpycP",
  "key27": "3W7Ph8fx8hEM5iCZ4ZN5mKm9z4sEDfjY1Ks6VLc489eztB4WuikFi5kNvhVZZPMARHTgdHibyYiEz8DfVEQ5gamJ",
  "key28": "228XqLTXhNcgKFcfod89NvufW1fwrQFETjSDfu3uPuYzgoy7iyUvEAkpffj4BPvq8cpnG7vfe8EemWcgf4cnWYMp",
  "key29": "53g36vcBaiviRqzrZ9JiKEQizMGRYJ6QNzyiMpRhG3RJHfJdPDVfLJX3EZeJBT9JvtoaUbcoFKEDSU6KZfDt6VWp",
  "key30": "5w7nUMLhX1UffCJnZEbQDArVuNbEUvz52JY5MYQWfCfWudAsWjcZWVYztHRXtS97sEiguD68ytYESPW26Yyu6Bh",
  "key31": "5abiHW2xU88vF2U4jfCdvKnTzT5mtHfdd3cmMfbbgqSCyUjoUQffdhp6HwdPQapUGoiEFCvp7vjLrSe7AeLXy3ra",
  "key32": "EGTD3cSp88g6ruWm1GnHt5825Qwz6wWDU2m7PW3A1MPNRZxyt5XBA5jcnK9FMSWoZ7uB2ptQvP1D6LedXKq9HqL",
  "key33": "4aF6C1i28jzKHVwvuy2LTaMpTjxP8F8iJtDjqe76zJXPamURbay3H8XPjB2t2Ww96jmxCZZT7hzDWFWJfzhZpZo1",
  "key34": "wS8aQXizaZaCwUhozfWsbVQVG8YSLgxwLb3LDbsyGYY9GYjrRPQw6Sgt3hdoKe1paUN4RFwDbqdd6r3NsKHvHCn",
  "key35": "QXMhjqso3ZSco181fg5b1YmZc2iMNUhYDL8vA8gsXHiVUfEhGXKjcGL5LzQaADoNQjBd3LLVPy5iwWN1Saw5sik",
  "key36": "2Tdv9aihi5eV6hdWNG8s6nQfNqKEQzCemhVJBu7QkdwALq7m7E5jpuTTz6VEogtWqDwgfkLA6DvJqxiBx5Zzdg2Z",
  "key37": "4LgPdvjwF4xKMuzY1V6wJdceMYRxyQQ3J3UBMQmzMbjWgv3eHyF4E3zufN4TYP5ziPyq8pPXCKhkwywKS6AZo4Xe",
  "key38": "pVn4Nfy122QiHAaJJFLZgzr6QpN8uqoraWsQTYbUS28qPcQQwwkShNYHV3HdNw2P4grQuRy63h4jR86EV3SB6ue",
  "key39": "3UNJjarwu9KQJJBHZf35k889PgyY2zYmVrbaZ8s5suuH7BojwZuwGvfxutG7YcWgRaHskT67dvfX6adMZ69JKLco",
  "key40": "3vNRnGqTUHETVzQiREQAymTLJxMqtB91N7KQFG7Ag1Z8X1s8FZDh1w65LdjtNCyanQFx5cwpxoht41rV4NYRc2tP",
  "key41": "5GkT4dNsuKx1X6fw5TX16AZnm6BYm2HGCa5eigcLMNbcZg9b4o1SQ869bd81GVZZ9N9hAEpHkaBLFbJpUAhSQjJ",
  "key42": "4BF9goo2YnVQ5XfKrDiTL6cFYcXTZDKVVzZWJd8EzrVNKnKTSfzp2u8rYqPXCPBdmwiq27RJnFMtZmXGPea4xdb",
  "key43": "2uceCsXnAf64RDMjQKzYrJZqm4dmqKvnnRrGWzpUK7LFHTDWwN9jjyrveFvNvTcVwGei8xfJ9LnTWWu3UtEzFDVE",
  "key44": "3Qw2W5DUFxa1ZT6mKesgyB7d7YzizYxdrhauPmt3nxm8FY2F6MkVP96zmtpv6Db8QqBcgUZuBRGtuGBJQin97gfz",
  "key45": "24UANodGnEAtanWiY8ubyexPDQvb5GrTv3vKPwVKkiQRaVLSfsDtwfFk3q8adZCFt8UZdJcfeTrLpzowtJAfebWc",
  "key46": "3FtARHJkSuab63QdspNCAD4LUvfNZ4mHUwsMd3XEYzM7c9vRB69MWez7E2ZTH54jVohxHHkQd89HRiAmNnNGUzxD",
  "key47": "4fsPF9hjozgQZgo15Yj3ZYprMTpuiKxpzLFYXaHp7r6RGMkaNCc3mN3zM6vRCe6DNbn5rXMzGdKPXNa6Gvk9G5sc",
  "key48": "4Xn7dH8dik5xFxxTVS5K4gU7adwTYbpUshyYqZCXXk3pEkfWSvbWxTGYt61tmKU5Kx47kya3iVGBz9bHuonWYKqG",
  "key49": "aiFXdCY71NzUR9z4XoN8A423igYrhEAmEKguz7VAWMAwEQE6TGLnZokK7W8RFm3ePaviRmr9koGo3Vgi77EZCjF"
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
