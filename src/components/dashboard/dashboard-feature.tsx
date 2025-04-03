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
    "2hPvcFo19fAWRs6nF75zgtg5nvpNmfBJzSHZfPoLCeVWzM2wtm2Kjp7XqS695zaKoHEkkg6aCaSogT4vaPtv4MgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9CULnQWAWRAmWb598Z9Xe3ea1XxEhg67jYsbvAAcPMqEDnmNm6ZJ8dSuKBa8zi4NjiSKyxUBQacfZAZBqibD18",
  "key1": "47ht6ock5SrQU81dfVVNDxEUxi1oWttVNm7tCCApDFinDbPLzPoYRzgdnLdykpTi1uDjxtyjrEPHQNJd8qAxytme",
  "key2": "Vyymw1M9Vs4e3sBTh9V1v73nLcDuA9cmZjZgvBWNuPbETB4iNUUJwhQMxzGacTmYA5nFR62ErErF8LL3vTwA9wd",
  "key3": "3AiACCktK7t5a8ooTho9heYj7spKkgbEZ2BMsawC2E5KRMF3LrBqVNsgkuKXGF5Ki2wtWCjBEVV2pfPmuQE4axvq",
  "key4": "27y4hyNVrcWc2PrR4J54TQs3Hg29KwuWbqUKbLgnRL1A79rmHD8MiHhQ8Uhtnnsjmy1cwXYXDaDhZbSbk3kyGnRp",
  "key5": "5ZthYuL1yw2dLJGWcW4i1VjofrE2taNM5gfjKVrmJaebAYsRJR5KMG3xDfi1gUM9FbGuphSUBsTazn8CiZLCqveZ",
  "key6": "4jx75JJait84WXTdTBPCAg56PevEojszr388vbtGxxrP36ergTUxWwiEECfrjSvJtUyeefgwHfDjX97xtmRMA7zF",
  "key7": "3qX8Abip7VqEAWrqhkp9waQHRzKNE2LkiFBN7246ocNmCRBtDfmvNweLQBewStY68Gox5xZVaakyC24JLpdvFA87",
  "key8": "3PaByopaVpvdaPQ9pwjzfZkUwgexdbkibkwtCoDLAhuUUo53sWUUjMGtmDFctWwweLAbCPhTTTVTGi65FSadWpfX",
  "key9": "3bVo2oLQgzkmCem9SEH9mwRrgB1WQ2TP22hPzV6jFBycG4kYzwaM8hVYf2T5UWiYaWsn5Q4YExnYLhjCrR6z1HeR",
  "key10": "5p1azsHGxmXtE74nxVwA7tveH584nLayJbt8KYLMUjk9Z7r1u3csvZWpLnxFqH32Vy32pimWvgyt1jWQvpaWyTFQ",
  "key11": "59S4MChZyo9VxGH5VcCcuSdUjsNC8FL27mWosZhPKDmwEB1dgbnxjSzE89ZigHanJHhSDukotgEv7KEo7vGLgod3",
  "key12": "P77dxkAPmFkESvZnVX7eVngjp7roezu2NsZWXtC5nJpHEtx8VjLvNawFpDfRSrg9k1jigdidqKNhvy47FiQjKBa",
  "key13": "nKxh5tusLvnDpfgbxk3aYaavQgbRT52kfBER9Ds1tdrNc5NSuNJ8tz9LDxBPKZXz49KNuoFpdpTVrsKdW71zK3v",
  "key14": "5Kvd2xzLjYTRDEs1EAcibCtbJc1rwnKM6DzrLu1VZZw6oUvdcH8KQN9S8vjUAW3R1Faw5yjBVEM8G7FsNTMb99hH",
  "key15": "4WdQK863qQAarPmUfmTRWjWqVSyXmTvbGoxSzbL1BCvxa6Cmp8uvSXfaUysosJfLrMG1uVnvs6JK4jAqw59obWK5",
  "key16": "cVaxc8d6xPUnBe1UBUZSyuvADcbtvScVCeGBunWFRhWuZ7cUnMZc9W3mn13ZxBMFxoXeTCzz6THjfyjLigkRzpe",
  "key17": "4Hx51ameYhuY9BSCaCLnxzGjFeedrVK68wg28uGJh5yjJDUUrnWvLLx9Pqd3VwdXkUbGbQUcaA5oZiiGgS5D1ydf",
  "key18": "2KLAXCfskVLfnQACd6KeFXFViekHqAcMDmnBhvtfvUrcKiWpp1N5v5QQLSopCGXdMUSm4rMrnutmPzPXZcHUBTxY",
  "key19": "2acD3CExe1ymWTgzZJ8Kq5iaauYmkRSXSre41ivY9P19iUKbANyNRaZR49pMaiZ17d71KbHSuaUmAGPq1Peo5hU8",
  "key20": "3FwqUkPw1XQExYiKMVSkuKsnbZxNPVyZFEoaJN3gZxGsQX6W1NDrfNDqLqyJjqgBjC94yNqfYviXquAuQbqXub73",
  "key21": "4ocgqgbQ2ZPB9M2U9aQeHPRtkMde47Xwtw8oNQas2UnE1q86Mf7zER8ohXj8QcBUc5JDXXRsDPsBZVrdth4dkKtP",
  "key22": "2pKSSqbewAGpiyN92Y4wXkHxvgq7fcsSBFaoTGnc4WDcttgMZ8iHciwqDpUhSjkoDxka3zKhGuQCEz3Yk8uBDJS7",
  "key23": "4GqfnXifWyKUyHNKydrbD2ifG2qG5YyzXTdvbnjperzp53gX9D7maoDsHZ7wz8U6xm7tqCLnXCA6S5pMb2au5Uwh",
  "key24": "3qjJV4J8v37Q1eChAKVtSmww1d1yhgKMRwvS9iHUHydHjf2tFTEu5vR8R99x2opuBN1HnDVrF4QuRYVHyhUMTQGR",
  "key25": "3umh5uzbc5vCm227vxp33EEL16Q9aPCq3X1DMD6odFwWxXrSX7JCLQTaSxaaVUh5G3yrsSTYZueqitg7HTfDwafQ",
  "key26": "5YVoqEdbU4ZH33RJiZG5KeJumwJFrAreZJ7HGNEipzmqH3GDNxMqQmiQ5BrZ98rRK4NJasyW47p42ZnQf9FHeRyF",
  "key27": "3Pt9xJ1KFdfWQBu1canxJXMCDaLvYWJtuD5Z7tVa6meg5adjRDh9H2i3AvxrXYpdBXXWJL9SvAuhCV1iV5GiER2M",
  "key28": "5rkGis4LSqkCLmGREMD1WVyTdTvNMrSVAA2u2kzJ2TxNHPNntSnkE3jV3L133fotStYNvjB1nWDAyBPemscU2FTf",
  "key29": "669jQxgnxjyRjChw6t2MsFLA8dsYatS2tEavvQPaHZrz9Ur8dbMLToXv6mk9fv1XJYPdggJCaAvoErDNw42pm75L",
  "key30": "wLevKRExoQxqoPwJCZpeQjErFcZu7gZ4APUW5atATAQfzwhto86RQm2BnzcY6DtLVXCABWwXKpVKQ4527qNNK99"
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
