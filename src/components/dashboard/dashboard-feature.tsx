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
    "3YBjNHipv4p6AJAfsKywyo12BMnPV4zbLrivkcRXVwA3N6CVBVqmgkhW7YAmahdoZ54PGzAckT7cAQ78XksMzLUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQjQvqj3NCPRKxqFazhcHiKSWeVVgX1DvRqHVcTrKH8LwDoGSHbJCCRe4neywPUv3bqNUctDoEfLyXprqL4w2ne",
  "key1": "LqMv5ZQaatg9PduST5d4a91JNSsRvAoJSfoAMUwPrfKcB3oQmPsPKdhRXXXTJsuS7g5z2N2DDMJoLR5sUPpiGon",
  "key2": "j5ixUPFoWUkXSaqQHHBEebSLPqSVWjdSPyKqx8Md8dDWkaxHmAwfS93ydvo7HYjFzgFwnEfyTrYjJY1HvPjAgxN",
  "key3": "4PotYcXfPT6J3kxUYwVcCiQeSHpDBYYX9HGiW9Prz5QX16sraoSu1HkWLQYjaFxTPrtShLVLHKXtSUjqN1Kr7Njd",
  "key4": "6jhf59LeqER4FbydJr3gszBaV74RidgEXWmGFQoA5cp9p5Y4W7cK9xhbMTPu232oDF5FCxFSDrzeSmtKwSmNuG6",
  "key5": "5eKQTBPYFvDDUK2uCbbtGdok4huwrHswskxzdA67qewqDQuAq5GqymCPht2Rg6TetTsD88xdtQnvbQV3rr72RwEk",
  "key6": "4Urk44VKHYNR7CoQfS5LGKDsTSwbHAyoVuzbJ4tYYfmwUohxpSCQg8m1qyLfbJdn1zmLY8upFZZhRKCbMY6y5pqU",
  "key7": "4NTiurewoY2xxQ6XEexxrkjjJbZTrXrpJsfMQaLn9M2NuEuc1jE3zA2oNhTiiCF4R6dgMZRGk3skxhf4vm8nj1cs",
  "key8": "2gj5SNSUB6YNybaqNwLkge9N3w4HmEZAPXgfiiBC58pgCJevhcGox56Z58RnvGRdmQSBpmMh7Cpe5vNayQatiN4a",
  "key9": "untFEoKsY3u5gubXzaGJzwh6YLRroH1FQiKagKdCgjEGaQkQ3Dc8M7uAjBVmgv3CFvNP21DXC5SUruWPb8obpET",
  "key10": "cXuJCNjV8t3HcFvUiWqr3YdA6qYEpsJCguddHJdigTwFERMsjNN9XSTUEtVSZrrvvxNY9ywu5U6pcMcfiN6d1Gh",
  "key11": "XnKww1vYRyz4gvU1pYqWvzzaAENVNch4Q8v7Vfp21CFxheS3G6KWRYY8TmW5J41Qo61H2HAv4XbxKEw6grHQNwm",
  "key12": "4eHfjfc7SiUzsvxfgZ5d5FaZVqDEcpR6pkur6Wm8aNv6gmbS8G69QmwyBxNFB6cBjHFQH8Sf67aEYjvDaRsccjib",
  "key13": "4MqpyyM7midf5tw75H3r2CTMjFAeEwpQXhWY3qanJwWEGe8cTgbB4495RwY45XPefGzSkBuKVWL9wTM4ruFKPtTH",
  "key14": "4iA4scSBrHXobzpYzxNDhpKVsWrvxoErCNdKAnqPFX4mFGhff4Z3ndDQ2d9zG8TLkRWC4rPWxyU8khKrTa1YzYsS",
  "key15": "3DcUGT8oQhkbYnweHa8E1neVAMRuar6x4sw57Kitw6xVGaXZhypDt7GWYFP4eBkCzZ2Dy77PzDCz8wwprFbYHxL3",
  "key16": "37rSaa4PLKsAWNsPzxt37mVT4LVqMYRcfRSP3Mob4VCfPVikBfNbKsARQG7n88pHUbzXVrWzbyYiV63C3eCwA2FW",
  "key17": "2vRBi4gTw8A6ShELicx4BKWDPxVAmQjk5tujrMq9QEuX8VEoHGUjJH64yHS1bfzukBhXTkCmMsteCgePTEpraXVP",
  "key18": "4hfzPw8GZ1sL33VB4npmNYtjGXDjrgfBCnCrykJcuYZyWNRVZV2KAmfCxTGovpewQeZFUjPxgS5jU62v5g3TtYwL",
  "key19": "64eZ49KLY2hmFK3EcrYVtsG1nRb863qGTnjK74gA1Z4oTQ3g4aNrgTxULwiNE4TUNv9wrEcq75yEsbTfogJw3eVd",
  "key20": "2vHV5T43Tk1hqQiTKm3d4pKrzYKpfKZPkVRgfV7FjxLCfHcsmHfh81R1waRhNSeoVYqwAHoR2U8ZoHAt64y4ezqw",
  "key21": "3Y89VYX2ZFTcMPkvGEzRSdkuB9UzXhTdXMuLuHxcJEJS8JhqnZHVN85J94aZAQPhppd81jWsqtQ8myjcKzouupRV",
  "key22": "g7qRB47apqiv6qskFZAbmtNWuy6PcFBHSpxNqcvfV16tmcnTKk74vH9smm6hTMTBPYMhpFbCEWc8XZZF8epsapo",
  "key23": "3rPkqikvTPCP17AuGhNrHEK6p5QYX1Xekio9timhTYeVGw3CCPUHfQ3ekc1JsBQw9fsgBfs2sHFAsSjrwwoFMzWJ",
  "key24": "4WAwmRs3BuU3pWWfGzkjdtLNsL26CoS9V2rW5mJQG1jFcn6z4TjCivXipwcxxQkXW3cmMnHhpP2eixGGuU7W3ayN",
  "key25": "2MygX2GudDDQtzzwG7b4YrSwWoYkwpPbr48C6DeoC7uMXtuK3kHqnX6EtZiiCd5vTnyAYngFujoZWftZXeNNpbFQ",
  "key26": "2nqyFmGj84ZpzMnoogdZC11gVcWiPwhGCd6EsHpBGXVJwWZqPzqFxhQNWUskqSf7dmZeRNLoj3x1gHftosFtk2ge",
  "key27": "3MGFKgEYbw2mtnH3H7L9a4PMpX3uATuDBLsvYh3cNnBPYnzgMdKrXKRmow5A9sX7JB8yPy4raeYSPqK1EHTMcWfZ",
  "key28": "53Qoe4K5YF8t3UCqvsST7ZUVQtspMBF4A94uA6N2m8JMKPhqTmRpsKht9L4GdXCt2K8u4EDWcAPsG43sRnHGHaB6",
  "key29": "2GcDLKWJUHZNUpxtQLGK6PTVc6FDt5BqBfw5FLf4ZqY47YRMcqKXyBzDKd6wV2oSSSW4rJhFxRVRAEfz752ApUdh",
  "key30": "WgSHF9bDdQniRyN5DLeyyaKJaEBp81FATeyXfvr6ZUsnbSbXYmeLt9vwz3X9PAphYQRadkq55F9z29LdQMfR5up",
  "key31": "2TUWMAkBbn3raHDL7Z4Cq6c4iug4bskXaZfByQ1Me72J54vhLCipkFEGQnQomJQ7mSbcTQNKNQeYfkCw7XqsW6N7",
  "key32": "5cJ2WH7nsYuc8mgSNwzCfwLLT8TK4PAVPjhE9RaBoTSRAXwvFgUpUPa32xgcTYuNvh6vS6YrqCnAqCGZfZFMkiH",
  "key33": "5w6uMxqUN1256vATQoY4iPVs183NQaxh64qTBYDXuvNGYaUgfvNt6PJgZ5nZemzUT335MZkfjtLDRuzgDwhtoRq",
  "key34": "61oDtJSgJAotEUrMtvR2HJXDkEV9TJFkgd6f5gwCZPYqUDUyHmSF6aB7kUP4tYtFTpQvdKNErgAWbAAt2EvpmGnV",
  "key35": "2Y3eEqwKuG7ziHsayoBAJEowvDyH1bxmMG2D7vnf6Egj8zhPAvTn6VcRiEDWVP4AjvHVshypn4jCyoWBHuo7zN6v",
  "key36": "2cJP229WMYyvbTCJWYSi8Do1HFMs3WEFmYLtRwAxdjfArnaQHEGoMN5sus3jD2xpqFbHCcH5Fx6EL6wcxHTrWvjL",
  "key37": "5AgzTnEanxi7Zk2c8QwH3DJ8gjvD4bEVJKyiitLcPLJrWv3QHax3RLbxptuwh47N9ivvUyovEog4YEdqUzbSh4bJ",
  "key38": "2Sn5nQzY1yXa9DxXNC2F2aVeyEUbJ6yErVf4eyxomN2hR7uvjUq7CyhTL2iNnx457DLNtoMKwofdSSMvxyWovTKe",
  "key39": "2d7v8EFMzFM7DmtmVxWdWB9vpnnM17A3BFDrmLL1zyK4LBBaDGt2nX226L65RaaEpRT3ULWUZfjx3YV3XkHETBgn",
  "key40": "5e8apjUmL2qykvFt7k8GNYmEsCd2gkkuw6jbUdwidxAwHatgcxnaLxoPFzFoG5vktavzkZcMbis1qdWHcabZJ2Ss"
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
