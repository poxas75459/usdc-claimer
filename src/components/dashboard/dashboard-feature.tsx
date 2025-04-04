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
    "5T6RLWtVdMLyPPJbej3jvVS1N5GgTp4ZJ5ePTbd8zKg1VXLW4eFG9S8Q6xxLRx3AZxfKrgd167cQCiMG9HC4fgNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjVVgEtLTZVTZGYjSE2HEdrGnaDNoe1ozAzn6LG6rGdw1BaPaXmA2eTWFhMuf4CjEMrZ63iPhs1FZQ4iKxMjaAQ",
  "key1": "3GvxVefSyiqB2MQGJBLNvVaX4GJCk6Nyg83i4rpQHRULjid8n6H1rhqwzZcFWWRfyDTLmT5JcSaGpAa2NhSQVqM9",
  "key2": "2tZUWtYQTmuwVQbyE3aQW8YVYDWmtNiqrAantURk7Hems4vD9wEe4LG51zP4ycNQpYnExBVBX7Qe4AzLELd4PNf4",
  "key3": "4PcE7NKqUPAk2s1UQJoRfHoT7ZBbsDwX7nU646aaRLouJafSe6soSbDvCRuR7qf7zvidLde691GNB7DmW8gAgXxy",
  "key4": "2wEzyh7482yD4YZo82yiQDKEwbx75dLdSVXkysiN9pbE1KBQzMJwyS4Epsx5zSSpSEx8tE4GDjEZLpKZGV3LfeR5",
  "key5": "33dARV9Dd46Swb9RS9UtrGbZh7vYPJewp2AQm9G5vk5y9ahpojz92E8QzPudcMpAUErFfW5Q7q9e2ZwGsHhvxWtk",
  "key6": "5SLmWfANxYhGsdf4yDejcSGMXvkX74JqWnrtAhcuxsxhf86qRAxhSWLQNjLreTUfFRcCargraw7Yy6e7epNmoobM",
  "key7": "2DtXy2uJ1MPPLdCakZAaTNDqUZ34ZdTdQrrUA8wxBXXekuhwJd3nyV43xRdVnD8JJcYDsyBXfY1DddDMEseoudUm",
  "key8": "3ND5BpSfpgAQtbRoadaegwvVnvhEKYXvBoWZLgccPC3bQq4pscuFn1SjAkhEa3BHoGRBJQaoPW67jXQ6qRiNKixd",
  "key9": "5CAMA5rXFNvYf84WeN6WMedE1kFnB2XkoBzTmCHiVN9XAht74ZtbTwBX7bbpSabrCdyYzsDHd5vhWBfYQgsBS4MK",
  "key10": "2wXNA3ag7gnXCNkDXJKLYQpxM4v9q8GRieq9W3e6hVZrwVUf9G3TY59bYmo28jk4RyS7fKEFYbad78exut5UieXC",
  "key11": "5UJxYEzgrwzXkY9zVUPQvPpjmd51bL9mMHZp5m6QsS4MUQiYhRBGygmXY8jmwyXGb2DWDxsMxNLprZRSgib2L934",
  "key12": "4cYXteANuri7fbopeVH8JQPvbvAZYDT3eFggLC5BwTKZc1ZmEBTDnz5yaWiZxkLvBrSzMmcJuv2MFavjDeGuwAAx",
  "key13": "5euzvJgwyfwdpGyLLHqSMP7kZYjFUxtRsP8aga16DfH4katKjEVzZYCVdLrvchEmtkRhMgxdi7bdjFn7mnhYqc9E",
  "key14": "5TNnBAEoMb9KvtrzjgtXM4un8KK3yRKJN8P4YMGVPaBLJ8w5L4Vt3eAV7LTvwCYdAKQCEHaA3aPreJjypVCxwiY",
  "key15": "26ZwGDARt8yYefo4NKBJu5TsQKPC2yNeWz3HLxXqBUo6WtKhQ36kpN2uMzmTuGeiu8EygHAZWLTzweP6F75ANPDk",
  "key16": "4VpC2iREaoPzgN136fCKEdbEXitBE6gPBQgqR2Fk6pfQEs9ALfkNV2qxEjxskuDnqTGWEQ1tWzQni3B85WXYqgbr",
  "key17": "2me8qwdzSwLES3YhaxGttKyPdFt96cBGiZA79nYEcMxMwuJQYRP7JSQ1oesWvJUF94dMwrZN9wBZw1h1rkNGxVva",
  "key18": "3iX13WfiZQpuL5Fdd7euVHRhwyDdTn8JQj6HmUseMPKa3qyY36t9fFEdiRra4dWwMnwJojhA5Kc5rUAS1V5sccwa",
  "key19": "3PdJQHQBd7Guyvz9rGEe5V71qwBrNAUqPbfobVsSD7vqHeUPZWFF7v8k6kRA1FWwkwZNqeFuNQNiAFHB9eUcLecG",
  "key20": "5hqrNweDv4C7LaUMptQoGEFsoMV4h5Xp46QdvNAKinkoisokW9QGvgSZwjUTiazsugWdoyTwmwTUK2uc1GCUFYoX",
  "key21": "EkqyirGgT2FoDuXCQsprQ5s6VBa46sEAh3LpZUJiFeQfTbwMy9yQCVJ1mp7nErDUAwhPFqCupj2SMpzHxLc5weu",
  "key22": "54s5LFH6zDfie1XduezemRArq2yW7xz15NDPnnGi8qCQWNRE9S5G7RQNAUpMZAPq4ZFyK1qBeCjrwBHQc3Gs5DFp",
  "key23": "5be5rYrhEiVym5WfrnGKiZN4A9PRAKseauFvfSV2RXGL9th1h6GseUVpYXr5m2iNzLXuiEHaNNabvFh47FDWC6Ly",
  "key24": "2rJrAzXxNQQASY6DcG4yw4pvi7godzgJoDTSqVhyXEt7UFmchEAfZk3Xp3f8W7vWFy2H4GC4hmpBMbbVuTEwT2jS",
  "key25": "4wTjcrWzWgQcqYxTbVrxQ9Tzmyt4oo3BCqBddr9oCoLhutVYUkXMpzSL4vgfRgMz3xQchkXSJY3wCgXLMhXvWtWc",
  "key26": "4LtVNnd19zHUZMBeiaRgiZUfbV1AWSKqcMHrbWHg9jxD6HCb5zsBdjYoHWxhRLdPNFXA55knG3igp8We2KSQYjRj",
  "key27": "4XEiKYZhypurCcDynGc92eG7FxBnJHXAwJG89n9MGTpKHN7droKGJ2GsJxTRHw3KDRDYppjAngB7z6vyuQLzwpv",
  "key28": "398EM5DBkCH6wjnzvs72JSZnfHn8kDVQ3ZbJsKZNXSYCkp39fWtnAQWwqEiRg4xoELEMyR7QiX3rZ4vpgFwkEVUu",
  "key29": "4dSSCHwN7f38Xk8yxpAGy83FWnyyxyeChFMMfNYwuhXid7AUUmLHHKAkbv6927ZGZ3KJXUGB4DXmNRraGsuBo9N3",
  "key30": "5t39pbHHN3mqasdsrSpMsPTjg6Reb4JdUrsckfdTcoodgn23mdtdDtFzPz12ed7J88LBn9NUWTBPtoi6ugQHgh15",
  "key31": "2oHDpSPSnuEq43P7QxRAno1BURiWgtk4oZogyVmxBBs42F9u2NPudbuSzSSPGgoPto5p1wSr2fbyP3pyAa2q8oag"
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
