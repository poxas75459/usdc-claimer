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
    "2RgpAVHJVciW4vWiMW2mfpGUaso2f6ABqo9s962cPi1Q8ECsbLKDV9NTa4oknk1KssU1Pep26qRWVQP3fwLvQhwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9w65Lo3brXWE4vDHdCtjhFnhAofQ6TGrWreBb2qzE5SRwr6GiQgmz8yYJLEKrmepZvC75mEZCNwVxWhKnY3mQo",
  "key1": "2giMR9k33DjBwbVkViS1t9xxFBNjENNEp3UWKjmtu1AiUUZvhuCVvvKahmSbaTXEADXgmybjgN4g37y75cSTYE7X",
  "key2": "2774QpRbrpyw2Uzww54TSad5rY3jRSZMm6wsESFsfn4J5jhuYzHVDeKDkYyPAzqXGNuAEYR1ASrwRgkU6UYyZaWg",
  "key3": "5AMxFBCgXPBSrRr5HZCVLRt2SqsXAY8trzf3vXRqPoKTb1TjPdWFg5Xs5VzrjAirLNBkp8pbcxT6EEyBMFEb5gMv",
  "key4": "3HuYCkuh5orpAiiytVfa3YivDkxt1DQKK8hFhmaxZ3ax37o2jubsgDLnmuXzfSFafqGeHJJAM7zPCp5NdLNx9Wsu",
  "key5": "3iMMbSbTPoRVLUZmTbfzNWXzcoLBpSgtwfyPprvfQs6fASFpP1cV76P8C35QL2fZBT5DwyLn5saAkqSknHHvS5gi",
  "key6": "4dFkNikghEVQ1sXhU6Drtuv5P1B3VfhQU3v7GMjuL4878q6jXhDogLXpdq2uSuinMVYsKYdqg4T5Ji2rVbcUaX8v",
  "key7": "27jfFL6o64HhjogmyWGaYCb9v3iaCBirBS39wTjAKMQieG68TqwnPHy8exAEUpbZXvVUaMEsuWm4kUptL2XV3PwK",
  "key8": "2FWStBhdFJXTDkVVXxHW5GRVkNkVLR76fcfBmnchGperzfryBxYWecwfdNQ5YkKbj8bMR1kFAirucyzj2heVrWB8",
  "key9": "39D6rP9x7ajG9YwSwEqtdjKnzY9q1M3vGriQReomhx1jfJGj2qx7SUYPj7vLaqbtCqFgdxteUP7crGXW7q7hr27V",
  "key10": "4Awya9vspueVSp8Efjs1TpdxdbUyQ7t3z5MXDHQ7fvPFhenCM55UUL1p4t2Gke6VFopQeLZH1hz5L2jGGxqfuzHe",
  "key11": "3V5ifDCyq9uFC5koazXF5PgcSTVFUhGdBxws3dqa6AAS4qD3ZZB91mekecfk3ooDSZByykEKBCLK9LnpU6tyXvdt",
  "key12": "zgGedGDU8sSvD7FAKPencEaLG6U1da8e3V45Hga5uawB4VdyvKnYsHT5GLiW8oubmVnJEdJxsLPdSNofiEyVEFn",
  "key13": "39KiRxM1NyZHQFimbfpV2XhKCngRRaLjfrSxJ4k5MrGFfKSrYchKWHHrctUE7GCn3si83n3Jmu2RuSp5d61WVrdn",
  "key14": "23WJbPHUT2a53hzG43nsJk7SPhMcXZjPwTPwkhMK7XbzASCpwWkDNirNWPS2SvSzVA3kQFCZHXnmAYyhz8QwQ3NL",
  "key15": "4JdxVwbedqXfXJH3AdSKsUXyfM4xbERL5RrFCH2SoDfn5FrLs2A1P7BXqj5d1hEVmRdbQEc6vrR8m4vcdqphqAuK",
  "key16": "2A3TckBbupVt2k3mkHzk2Q5P8j98yyVoMq6tJhinkm9gAgzwbJRnjUZGDfw5Kub6K78bcF3nw518NyaCHvx1Vbx8",
  "key17": "2DeoiLecr2JyocZhyFwGvLtggnTe6CtermKLXxCNDBBFWefGgzpUNvo8aMyDY2ZyZsHc1pbUed7LDaS6K8o7bTfA",
  "key18": "5sVeVWTVs3JFCUCSramGm9gjAgg8BCBBx5TVMAkH6ktjQcTnoQPg6aeWctPLbX19LeNW62NQVs3qhZL1wAU9ekiw",
  "key19": "2AXbTuD3GBcVZfvLjsBHdDGWiLXDjvJJuhU2xuc1MUW4PgDgJfm2Dq43rFde4GjuXovbKfoaGKw4NG99PmnHab4Q",
  "key20": "vpY7Xxq6nQxu3CSJciNphbsrweBX85yGdEGVBHkU88M2kiw6hnCPkcmMT7ajjtmkxvqwCW9mFFsARNqbxgeKRYQ",
  "key21": "3ofiVknZ5VPMi2oFPrnjxrfu2zJc7pCCFAxtjRLWsifmrtSE4jFPv88ERukxdtZemGQe75EC2A5eE9XKCvaTEtXy",
  "key22": "3Umny5fZ3cBgGRpaEgXScrpL2oEfFET1Tq4a9nWCi9pr5zMZ45SM6diRpYBPvKP6vUQdCqyWgThhj1drrjrix3vZ",
  "key23": "3q3BqTikLAiKGxVpguJwmDEQjVTatTuMdwCp1xq2WU5iiuA5JXxt7ZJPaGAYsAURKFqfkrCuFkX515VrPzkG5dR9",
  "key24": "5amYfU1Lwd7z2DBDqhS4mESmXZS6sjBvDo1zeEk3mTTnwNLKJ4CTtAhZjgnG7EM6hoZZzQaDWoNtj8EzgbtPkT3m",
  "key25": "44ZLE8p8s26ufN8WrcQUKLwGNhXsaU2kmwBaPSYRLTfd6WiCCJCy38MgnRriu6xXWLBTwWxRxS67fWH9z6F8KRgH",
  "key26": "4g9ZYSb66mJfyie2cWqhURwsc1zQLNCmPspodzJvhgYwAw82CCZ9m4eYz5o1eSwGPe552sHKuqiiBgHBKY9Ze3wt",
  "key27": "5ffuQyPh4sqvcnXfDfpCzPGqeH9rMSLJk93XohKKwa1YYNVd77QCYCeNTWF4vSuTqnKq6QtWjoEEmbVsLFfYbiGc",
  "key28": "2nAewWYCxbzEb85FCVupH83MV5Xkr5qzvqEdCY8GAcX4vGLgrVPD7F6eWYzb7uFbLm5jXyRM17PTyNPqVx5hx6VJ",
  "key29": "AMEnioVo2AQqWLjvehnzuXm4aYgrG3vxmJf9LWjSPmh2YHSp7H9iMCyfsS8kvE4CKt7aRESrjAjkvBTob2dSH4u",
  "key30": "4472vgaqc67nYPe8BdxbarC2Y9DzcP8jjorPRzNCojQxk2YcGwXHNpUQePHeghB9JFxm8rCRv7D5sHJkDjZnzcUg",
  "key31": "3zXGLuTq6Dxq4UYN2DMrmqYUfvYohAv64MqydnKDALWNAoaxKZeEH2KRc45DYsgEmQ3aQCC9MjbHcWjsP5QB473s",
  "key32": "4VRVwanEDiUJatHUv2AmjAgeLMd49wCA4J1LzVLN5mQERxRm75eAUH9ELS8PoYxeHV7f9GKNGpzdqpFsQkczvXqP",
  "key33": "4AqiZSuLw11mGrsM27JJgqyFGZoYjAs2ovhDuAkeXS21C1RtAxCVQmvzFRkX4sxaPnaHNByUi1AVFHtYVcwrxQP1",
  "key34": "36VTGk3uN2jJpApEqfEYHV3oVJRrvcqmGVFv2i2t8rRC6KvK7MEPqQ7TJbcidPx9krGsHp9RBGbhQP8QYVpeEuVx"
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
