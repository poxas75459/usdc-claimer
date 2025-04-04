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
    "2hfMjdPyZVC4hnyj5dPNF7qmBrmnLSMFV2mAPQWGH96661zWkiw1YakBCZdVHdHg9ug8ftKMrgW9aKfQWsSnFFXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yo8ydKREg3m6CkBjsva2WzpAZqZMGHECPGEPRTzXSbD6jjpTfxPin66VRE7WM2gqKgE11uyszn4roasFzvea6xW",
  "key1": "3uk8xGXQnQHQreUYJu8FYmMjJN4g9rSbNtCALESH8b3TeFU9mP75E13z8855LjW4J5weh1QZUjuLt8AqYxkvXXpH",
  "key2": "2uHmvUYoZQP8PevmvTo5QCrs7PRq9QDJp24Rb3RxjNUoX8Ae7JxyeGyX2qSLy9eRbppPjCxqi5yvtvVb63fYDckR",
  "key3": "5BK2inAqvz2HFnjLDo1cvBzYXgHMhcNFRKJWEe3oWRJrV2PWVcs2SgW9MqMdj6wN4zTChYhbrrNWu9jgRptWUpC",
  "key4": "5tLuTJB8n4eQaZYHwghwW1f7Xvjbrrb7v35azZjXCqQ8D4pUutE7ShwKGD8ahZhkgLnoxRVjmFq79F8152WR1pAU",
  "key5": "2G6uDe3Zc3542ofJLxPUcVRPj4EeqinmTo5LbypgEoyh643F6KDHU8BtbLz2QRn6PXNrAhdSdngFQY2x7uMVsY5o",
  "key6": "4sTBgriPbWQHBzVUTxWVfTYsh2NqqWAE1qoWCJDHsX65SGK6WSrTrSjHW38ZkVptHDsmHnynYtfpybeyiDCxo3rQ",
  "key7": "5hPjbebcKas2q2pwVuyN8bUhVBtg46WhGajuzD6LBMVmzQeZLFhGZJMRaD6iegmK5LE8qQZHtieFcBkKv8pL6heL",
  "key8": "2ufk4vmwyd5rSh63eMscEh5Es35Y5QVPqNmSMvXbidPDFrRRQJEeZS6Hn2CeHA7AxR9STEXtHnqsw4rxwJSznCid",
  "key9": "5YJx6Mi9GvoFrLmEjptAgiogQghHkHJXQHnFNA3HMaZ3r1RYAcVM8zQbSVsv5tWDrWon9w1eepHovTPqAH8ns17B",
  "key10": "4vtx1gWHqQuu1cDoWKHp1finVva2SNubWkU39EfX5S1zmj9Siyxmw12AWXuopjMvhAZ6SPcVV6opnMTP7H5fjaUC",
  "key11": "4XbDRqeyL4xPFjF3bDq9ZvC6Ey3qncwRno4GzQ9pCygnrfaiN5JGmzitoRc4CYZgW7kuReyPVsH9N6Fmyn7TUHVA",
  "key12": "5y3JuLAVpeJ6Zyxm6YZghv9n755C8cD9Ki7G2kcPnYLNBw7duqDXF595XXrcAhU1T6TfZTxGgoEdQUSPDCYLWLwN",
  "key13": "fc7pZSKPYxc3TN6i3uhZnt39pRCFAKzDpYDb6izcvtuFeoWdir4zL95z8k7mZ75W5jVCmmaRDub2EycxU3J55PP",
  "key14": "4Q8yjxGssSBCdHVaFT1gNvqZeUR2y3eji1paRude5My4YLoLPfMpjr6yY4VVimCQ8G5Gy6Gz6BTT3oGWyLMKcBwU",
  "key15": "4HqVcH1XMBFKXuatb2Tx6qwozHaNesRxnAx56nRV2Bn2nmHngUQTzzuA8vUZbhRuFE4FWWTf9tGNxT6Wi64utGG7",
  "key16": "5EM8QxRXZytt9erthtji7Dq9NKo1B4GXD4NPsnvSJ5A4j71jc9ShVeN4tGCF6tHf4ZKdRfofb7rzHi6K18sgqok6",
  "key17": "5nKnhE3kJ9y4b6QRX1tYviUF8v7QwbZvYpGchdnBAHQ97N3N5PrMGyqtdUJ9ffhg671uYec34R19TuTHFtYkkZyd",
  "key18": "4dnJtdc9Trv6pftF4toNzpdsZPNzYEj5oLLJxe82PooD4fwxpzvdtis1eJdDyCea3DbWaQq76eC5LZ8VEiwXakHH",
  "key19": "2pVYphpTCnkXQHR3Uqd44rxaR6HAbgNXwP3TFVqH3gkVBYy2mx662U3b2tmbnMigQhxaGMjpKrR41c3rWyL2AFVH",
  "key20": "5hshuWEVkDGpujEbNWeSbikXiBqadsXyzLyGrrgH9K63wPcLCf1wKS5B1RzmKdm9ujS5kyoer65qa7PP8zAfHYYr",
  "key21": "4CH2zdaggRdwdrHw4jnQYDVTNCPkCnxEnEv4CrzaPhKg2N8dGsgsUenvW8Sj8e7qyEEnLGaRrcQN6zZ8kpF7Uew8",
  "key22": "1RC9nSTeTCndnruR3ugN6kuvyDcAagyEMKVmtdUP2eDdEcYjfK912ai3KEgNjiZgmXLuPg2XpNYmTZjQFBTx6QW",
  "key23": "5Krx8Xd7qU1Yys3T9jwuFgZpBfuFP1XfrpLjEfnCbpnk8u1mqAzpn3fNB4i5Q7XLfXYUpfFNd3eQjb3v19koEHno",
  "key24": "tgSCF8iLbtetCPb2SfT8LhuPjvSBAVPPUunx6kLUmTubaghsFLTdFXFEtxxWzzgjwUzR6VW4Mrwd31rJkjdYLud",
  "key25": "Qhc9wwPNimTizjZarHgptuq1iw1XFZ7sNcjXjWspvQUQqDA4uaDXEFEyTZ6VkDo9aRaWH8XX1jLixP9nDH2rrp9",
  "key26": "5JHd8McL1h1RWzDrYryx74YWLtssHJWmvdR5YNeCvs6hzz6J5mQVBwBTSufDqX99zok8gH6WXE4JLRMMTN7ww7p6",
  "key27": "2Bd39D9VxngCnXhyBUdRFk2pGEbj2sDpsutdqfyuufwYH7Ksp8mw7xxGaEb9bjJb3AfnzrWTgmj2voukibDNzKLi",
  "key28": "2iHkMukUDC7kSHgw2H4XSbb4KcwaajZ4wgr7oo7DRTinuHbe9dfCiwoLeuoGaAHbE6MCHS6135bpDvYXdMwfEacw",
  "key29": "36bhx7N7vT6qLX8ADNwp5LYZ4iBZFhx24u8ZS1a2HNVys4QyC4cJ3nTxpDuhdb3zXU3BqwE14WM5qb5iJ87ChVXL",
  "key30": "7jwvEtUzqK2264fDPDobDbMPnK9hL3J17mNv2KdiLu9hc764Pmd4iAjd5xtLAqgrAcLDBBnVXwzVjmKnNeAfQwn",
  "key31": "57Gy5pPJCMQcQah7h6YngpGPdYPLeNzagHvXqXtrhtNxm24QvFmaFJZd3XxW4Y4Ehnka3GyPvFfiozSHVyTiEbMt",
  "key32": "5u4sTWkqwdgq34mmRAnbgWzUhn4S949HEQ5tHXHCPCB3Lk9tGF7SUw43eJV9oZDpRCnTEBuaFMh1bxsEMM2v3YKN",
  "key33": "55BFRiWAKoaPrKsFpXuS9kCeFskwoj4xbBqLoBhsc81yMFTXNLGK95qPzPfvXmWvNkTc4ohDFbFrH1z6W6GbLQpZ",
  "key34": "4erSr3ctvLUMfXRMCZNBuSW1EN2CJeTqNoaQxWgppNJDTuek46LsCofA58uq3e46UWy7dd2f48ZsyERJtNAjA1u3",
  "key35": "4fkJHtuEfD5XN4XsJiMNadYZ5WMq4LCzeboLZ1aqcAEZAG3Ccvnf5LQWKmfcfUtyU5NGnWfEQZd9KiVq6tjULLwe",
  "key36": "2Ymyq2o6Vf2ycEvjoQ2bxns2pJa5qK4MRGm8Kc7Rh6poHVNVMzJsrsM2wGfufg8zX2FpHtxQCfH3YTS5xdN82W2J",
  "key37": "4RpLbTL7b38b3vqEGX4FM3f7EFcim289ufwAVEvLTgGF4YVutqg7FPvnMXZ5V9GtMDMiYX3do9NjFanz3T8JdyMw",
  "key38": "2fm8VXLuriiKQj3n7iecFmAazjih2rznFDumgbqYuwx6warnmMTAfijKiDX7kPpqL2tvqq6iFThAYTqGo28PBHDT",
  "key39": "2kCP6sCThuhKmbHd2Scj2B5VBPRCA52FZD2Z5aoKvBrbN7kYSoMyjZfLGsYXmF3hYvvWr3yU3SxPLo94stwwiWVQ",
  "key40": "2m8yWbFbD348Hiur2WCGmx1u7xQfhuLgqAArfvPfEQ5hx2wTtGrTm9GyyKQNew57j3DfDoToye7ZpbyrCYkxegkX",
  "key41": "5wztDYhrx8TwPSNb29CVpA8nqZKKJwPGh6vkh6iz6n38p1j8FteeZmLGTrfWk5jdxHHQyZkVVxAF3o1AVVcbHXvf",
  "key42": "5cEiE4GuxtXFotTrNKEvgsV14BuygUEmFeqkUQKn1kzEQiWC9zy2KJaDbTRezeU35jgsH3iaZ4gX2HeXPC4KGttn",
  "key43": "2SgdfQZ1qF3JyeJsHrgmcz89VVLRJfx7jdgvFc7sDscHPSfZGpWAGy6huMkurJ4FbewbtZopvuTo8CEDZefTiBBF",
  "key44": "5Juwboc3Qun2oXUhCyfrGLkGVwrVGQbKnQHEw4ojCVvXuFFVMpDRtSbhGQBXfsNLdiLP1HiUNcFVfmvNwbAd7EJu",
  "key45": "m4a4c4yDAgRW8gGn7CJs9EkrNfrkSoLuEPm9zwWdBN9BH4nJrgzQ47pwVj7H5BR9TgVVEXZ5r3sfHd7B1C3MhKd",
  "key46": "3HbfpNRS8qNGanF46PVuQy4czdNcoeCXeRE3V5uXdUqRYMxQHscdN6orsrRbCXBbbpLiVMRUr27aknngSDGExuWt",
  "key47": "4HyrFS8EFreAMmezNoXhTFvoit3HXpTi3iuWsppbXsrr4xYdkWnYBPz7dspgJzp6Sdf8JbsWx1hMmWKRgeGD9e8v",
  "key48": "57YFiS9bho9HAMpmW72o928rhuJN5ETyMooheBjwnGcj8ERT9ibPDEWfNLaM7i9fqLe5h7UyWehe8G9AMKtz6FRw",
  "key49": "2264kb6RXc92S8MREgkJKidVkVHJForjTfepZjARV1xwHrgSggmiB1NZ3my38GSZdJWp299BFFsti4k12oR8Ec2v"
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
