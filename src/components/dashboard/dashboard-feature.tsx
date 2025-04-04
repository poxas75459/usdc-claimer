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
    "TWQbBkMN4m27oRujCDQSuHfsSsEnX66JemJYKriYgok9hYpy9H4adasZwvWpThFZ23kwnoqSxt19De3BGeeznLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fuE3nFBiYZvAGk4sjXK6afiVsBU1oqZmNhTTpsFUkHqQCYneTQhzguTba2XEETuK2hAuYYhrjRrr5UWSZJECjEs",
  "key1": "4cdutYCMyijLwVU2NQCDtgaS6joXMnDWfRHTFkbQwiBtRLVBxkVVGTXPtF73jh6Lq9tnEK9pauu7vWjQdUR7hR7Q",
  "key2": "3u2tXQZQofeL1cuaAmcrH3qTuepyyMT2aQw9c3stbmdTRvyQ3s9LGB9kq8N9njC8RicTfrJGk24XJ6cSkz6DEGwA",
  "key3": "5T89xmkyKazScLCu88ZPo6GeaCyzv21nEh5tJKwvwT6g9bw7tsmYs6mmyLnrR3sAeVku4oM8pQi4N5YWf2zhzN1Z",
  "key4": "42ggKwpbGD3R89bX2MPXN1GuGA9KztRqCivj2U44rFZRWbQCzUnnvEvaPKtk5vkSMZasmrZq7ZjFj74j9uhWQGVg",
  "key5": "33CR6AmC3YytZiLJaiTS7NysnV5AqPoiZqnfpU2UcoKuujpCN4NXJ7zVsuEcfzVzcGUfwxiC9dwDUAiFo9wcpeHi",
  "key6": "24isV2yhUJmhHzut7Cgfo3BNPWbvVDfwaC2YQybGMPYJU7onhTV8G2rAFV331xaSSZn2CiuwrGtiJS4VgPMfZkTL",
  "key7": "598euYZaRdWBrcDcYjibBUAC8DSgasrzr7urhTXWsWbHvvrqeEX7PeqE6FMDidohZoQDkb6Vf38s6WhE5RFtyyHF",
  "key8": "3k4mTiWpYASTAMZqAxmwzQTKZCnXfCES6bRfCVYVNy9wvnU2mwbTiZZYueUrx9pee2TxPMrNbSFJ1kV6oiPbLdMD",
  "key9": "w1iRMKhBQKis8maWPaDhiv8czRHPZNRgyd8pWotiEborRNfgxMCzkH8SgxRuXuF1kAHki5x7U6mkZGmDdo1H4xh",
  "key10": "4Xhtm2GAbgf9nVMtQfHe64t8ArGBuivwq18WGNVwpywq9jUsEgpFUQpshaCrv8LNfK22eTSxg7NfSZmkDqESeD9x",
  "key11": "2twNXpnuyfuon9u9jqf9QjButuuTjvxQ145tW2Ft66VZ52R2tECi3uBp2fU9JW9WwoTiURy1rnNgHttn5BuFdHpu",
  "key12": "PuqCTE8p2uX45Ut2SWBRGu4rm2Wbu5geRtG7uv8Mc36whTrr5ZG1c5hZwrp47c9Khzm7s97hJ7pcEp7dSEjpPYj",
  "key13": "21jaxxGzkNWHB4SjKEwWdqPRnTR2yYViFFxaTVhWkHJbnUhwSBhpXDUyvKnxJUrB9SWhmBCuTj5WKU6SK6jcXmyg",
  "key14": "56NJ8MV2G3Rf8rsM3g4jbd4F86QfDfq2ifdAsGNo55ZRgKMLL9AajCEpohAZAb2CumQqHhtTbEjX4cQBNbVxbEq7",
  "key15": "3RDiudo9hc3xSDkbhva616chp18hJv3awu2kbxZMYyD3uQXJrGUipm2ReZ4bkGM2EArgBsxcNt3iwgG9R2cTq6yw",
  "key16": "5wuLgqcWcXHfytRfJ7dmMS4HAFNgTqAQWnLU3XdQg82SsZGbt1xdQsrfdjbNMS2XJKpidFN7b6mysosG3Rh75dUE",
  "key17": "5jBCWDjmH9tjcHD1zKc3L192pFx5upoi7cTkLBMiuYHXWEt2FereiDo4iNxohRrF4MAAJ9DQbJ7oDbme4okfNq2U",
  "key18": "2jdmtSox2VTnMkkqRBaSofjbo1hqUccVcQEmgYWkZJDQcMZ3SoL17Gm9GN95ztfyZRakefsypYe5PPsLPqmdVCm",
  "key19": "YLJFA2fM4YtJUSGiCFt6L4riUfGkiut37pgWYm9fvQvsmkhVV2u1caYuMBazAbQfeQB2DHMUK3pTjPdsqRGbmMA",
  "key20": "2x7K1U4xzaUtuSi7rbQLtt2G3HGKRq2RMp9H4E96FwyLQ6sFQDchtvcMdeqNr5gPME9XL1vxHprVUcytpoLTq9kH",
  "key21": "2Sa7qkFBAg23pLVSHCzQNJnS4CpPfX7tWWF6JBbMuTXkVeksP8GTUhuhkQm3CnEUZdSPYS5ziFQKjMsCxuRYMXxm",
  "key22": "5q3yPGZENjsdDdivwvmVLRScxRDr1FjyW8KkGtuqLh1jER9ksCim53obhvWMyEY12iH35gU7ajH8vfGBgE7p1Hts",
  "key23": "5PEkXargwELcRuuiPsV1eQJDPrSRhbvKz3dsnLFK5vbgmzPbZz1bJ2e8fVjmXVLjx6a5Uu2dZNAThCA43Bqeed9f",
  "key24": "4u6xzx5RESkG41LDnets34tUUqB59Ah9adzCVePgs1vrqFm2MSp6G39qAKxLVv3gvSHdbKW1UVs7VJ1ZrxXEjKYT",
  "key25": "xZYiLmBWpEckkZq2n8NpkZshcPbjZjzhmNYTkBjs5GpHvigMc95uz7Bun6qAawwmC6udaAeX3Ekh2kuV4rVhnif",
  "key26": "dtY2fsW2kuooRbfknBo9EUL4FuprgoUAfRxwGs5J3b3zygMAbZceSjgq11U1NvAGAqQ6ycrFoVzZj4LVN9mqdwg",
  "key27": "5TYnWDn3Pc1yiZj1NtCKv7UTFFod7q25kbF49P5EXAYKunbBcKq9jsB37CrMxk5fM86XQwjNUiLBcZKybGZja78z",
  "key28": "LTx7MTT4xWNQKxb4MUSb4rQPLFFF1z9HtWCsQqxNscLSpUir3QVnTHGfHPG3An9d7bRu8Du9GD19MmWaTn3uNEA",
  "key29": "571kuVmFCz2W3xma6q29ByXeYBREYjCJE5LjWoc7YUuUpBTPqaievsbHJZHHTPpzxiCrDo4dXhSTM8Javzx2JpWR",
  "key30": "4sqiDpFeMTVDRf4DPGEL4bcs1DsDn7VgQeamqq8dxN487NNYBjuSicxFYCLk18Cwd4NU3Z2upsKcTJjqq3vboCfy",
  "key31": "2VLNX4KwDZTzJ8ZWBw6xoFtXXZUNmd79Jbwte9ykKuy37faGfvJNTq7hMdnwV4QkrZp1dyLshdzt4r9ravHxdywU",
  "key32": "5NTYwRRHD84zYApV6rkxWoHQKPyeASThTFMxFM64QuXqc2es8Xw8G5DMPSycBNXxJ1WxRrVzZsVzRUkz6QoU5m2W",
  "key33": "4bGJ5pTLkzW4bmkAAj9yWSdzsrQrGaqDnEFiQ9vzyDBUfLmb1Zv5wuPqyF39WXdoxmxatCMtzLgnBaSt12foqWMx",
  "key34": "4HXT3oS8udAhAQmLuaXEAMQfffzXPe9VNuWfnyC9StxQUJFj9FbGHwVQn1up2YXAQJfGUgQy2KihXeWznHFQHZ5j",
  "key35": "3zk99koWssGHD9vK3eHAySWKMTfqksbKicBJhbfMCinxc8F3tzp6cCaT54f6WySZxmBMYc48SKTYJUNF2rCAj9Kq",
  "key36": "3iE5xQBYZ3zqHKA4tkxWGpuWGCb8S6ci49eLUCNHmtTyTygEtdGozR8gdXnSM9R4SmiUzWT9ZaQR7ZSUFnjozSkZ",
  "key37": "pmMfhtMiMP47vJtXwXGjRByR2M7qbudzRq1exEyfk3z6PPTfjtihyfCBfPzP85M99fnyr6VWMALLB4v9Z6ZJiyj",
  "key38": "2MsBSa5j8ZGhz63QysLKx32KMbjHbpec8bhZmjLzHaSJ6f9ysN1Sgg9ydELNvzsuwrTVwq99YR7VwVWZWbo13ceG",
  "key39": "3K9yLZCkd4au1BXKfmrHDuYnnM2DrZP4sj1YbN3tgmi2GwFatGzMvC4toorU51mGofxDdGrVTPU8fAJWxNJCyCk8",
  "key40": "4YQxGvrahUqsz7erPY4RpDSSRsEXRFFeyWTsNT5tiW4UtVLX2XZwji7rimXMBXuVqJqZq2psjDoigM7WcH5aTJDM",
  "key41": "3SvrqnfMC4cCqcStPBmH9gEBB2NV2P7XeEGD22fYuTqJ4q577GQ4XoHSMN8GiRGd7EUa1YhqHyYPLMrcEoiNCnK7",
  "key42": "272hGnWFKdzUtdoFFUVhxpauc8SxsQ7jKhiBZhC7gcwQ3QXcfEcYede2SUsdQs2bFnCdNWPnfpREbLYysw9SYZSF",
  "key43": "5pWfTJJgXsbKn1VNzYP13WZjvohKUvwDJdQxthP6KKtEiWdUogfZLiFFN81TGCAfXsELdE8K2cJXJzmGmsVuSCNW",
  "key44": "3rmbhPhiodmb38hez2GUm3VykLoqnR5rHPS37ZyT1DEQeB5zSYvKhUfo6qv1DwneTpeia7G2DmcdAo8UDRX4C5KE",
  "key45": "5o2BPR2dyukJ4qTNsqXrzdD8swLEEdcggTwhRy8zaJqXdqtmTHPMBvXaPgbhQjY4GTXmRepNTknasf6R7zxFpeBD"
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
