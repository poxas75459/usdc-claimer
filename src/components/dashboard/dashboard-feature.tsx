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
    "61cJJvP6Gw42mRE2YoMmwD5RknKKPkDQNmiVW3UKamXYUqfHxnAxkhn5QrwuQ2FyxhCy2HB8g7ALcbbALWAHmmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KSCi1bsyssfGbsxCPGaS2iHfD2M6KnN9neZxwiaXTztxB8a2jX5iDGKuFpAMWjk5V53pwB8u5coA5VCR7SJ17qr",
  "key1": "21qPn9DVp4YPztn1MTMWjSr5gKGDGGgC6LZu8pFQWJN8CdjgNjXTJyGs6BMno7hswEquXwZ6v447m1NTmQ3wzFDM",
  "key2": "3GQtARm3c4ijWVTx1Rj9fenhjFxbUqb7Juu9Aagm5udH1GxyEzmMN2fTHALG6syscKPZFPVTpr4jyezsmYZgDvCS",
  "key3": "5B1FFDDiMS3bTeRSFHFTQKDugcMxonEsCiKoHDm3skkqcdoSeMfir3ySnPxS7LW2TivCYnXhG9DUjcKwBQauU9YG",
  "key4": "4NY7jzepf3Lz2K1uuodajUPJkKHTzim94jEEy6gJREXJjXXEJTUt1gENLHsHYaUmJgPiVVZoUshm7ixB58cjufmx",
  "key5": "rgKboHm5k5iTDK2NyK2NjeN7YVLoNGtGP4x7pn66JSnWDPvBdXH1hmo5CWe24qxY2hqc9KE4UjVmttEmCLfCWs9",
  "key6": "FiWRrmSgeLajmiGgzc9P834ZCBoHbXqnewXSFgBLRKdpAE6wh81ojgzAdrXzQ8Z6tM9Rd7Kqke18UR8Hv5r4p9v",
  "key7": "37P3NA2TpX6NkuL7YbvT9LzxNb1HxRTUrQm83bVHye5EiRj3QduvuoHqXc9w5QncRB3iaJi1uMg3tW1NEA3aSeqR",
  "key8": "5cMwgWKppphDxy1VcUzhrrvMJjQkY4hprTQ3veeRTCgyuHBCvTvyrtazStPLDgf6zRgkbV5jatVbbVBsTaFsf2a9",
  "key9": "38zBDwwWZFk8bw1nE9bTwF1N7JLDW3MVAMpCCm63sXMQEbdoiHjWfPikoat2E4u5dR55S5m5f3FSxK1jZ5qbyboH",
  "key10": "3JPHFoWYmomuniPT89izicqojQz7deapJjA6nZQ6mwWh7yuEitWr7vAR25R12RWXKk3zeA32uvG3eGfkYGp7ZWy2",
  "key11": "5hDw9ibXdyQdasDRkP4NsueNk4kdRJyyGu8iKCj8wtMPqk19jWjhRzEk87rrngD4UgmL9uESgM1eZCCd7KveYWnF",
  "key12": "5NNfzgKFXrJGhaRwTLkVKY9Pd3DPVY6x4t27Lo3ULBd6Y2rwjJkuSmSoYRQmLugPXLwnx36SBeXwaKE4W97SWsZs",
  "key13": "4gef4J1h2wQs2waf1wSxDGiWJZmaZQJyPb9wbGeiCecHe8Mizt76qNAof64i51FAowJhDv1fW2ATsbdSbbBKrTeb",
  "key14": "4bEQ3pZ6YVMaBrsKNhL4V6oXz5KLJSpuqJJK8ZBDy7vjbFg798LvPxbXTyeTpPcpW29gscWGAVHNmru2bgwMh63z",
  "key15": "66D4o28E6HBfUDRDWF3tsKGKMq4ocJnbVG8Jgj9xxUFipnK47wGStQpSi3GBZWJ4w5FDjKHwx8Jro8h3aj4PKhNV",
  "key16": "4x3MhJpoQDnTKf2hxG8emvHUWmxs67i1vpczmrrYqwwZpBiAi6FtRy9idqHntz6otfDvgFwpcxrsst76rCKk46gY",
  "key17": "3NbDL4yNvsdfsmaZ4UcXXpBadPrAjuWQThsFuBFwUk3K3x3JvQyaHdmNiey6VP5oGd2SZuNn4DPuKC1EmNVPq5wB",
  "key18": "fokHcXYW3dMfjqnx29oY3yTh9E6ipMpRwmnZY2rEnTerJ1JrDMFRUBNpZYyw4HsANzzSAgFDcQBE5mbHxEezz1E",
  "key19": "3Pp35kfDAP6oTv7EHXtohCNGL8FP6UNwjCcpKuGVMeht1385skaokJL2Gvc9CNyL4cfYWgYe8ks6HqLdTicMqRFu",
  "key20": "2FXqZJ8abzvy8H4hrjceJ1b57uP2N3gRGZaZeXNinGniY77bHhzYoKdscHgVNF1aEoLFKDG6TqWqdovb7ExmfiEP",
  "key21": "mRbD1e9aAZhAvxEAs2C8bzbtqKa9DxFfbdHqrQ97hFQzynuM7Uu1Ky3ak7jmLfPSs99q5g37nggvt1LfJUQ6YrV",
  "key22": "nr1PrLpBbkepnmJuerXVAyUSUXK1u1DijHgWG5qbdD2Cimq4PDd4q1i6Tbfxpfd6iTQ3W9TuRzks4DiwFeQDKqC",
  "key23": "3YgVsT7LMuNNRBwtvYcb2qmasY2SEStZWBuNmn65tJirfS8cmKbNJ8nNHNJFyFajhRzCWMAQakKPUwkn5ZgTp3wY",
  "key24": "2cqxsfpGhAyznboguXQntCU6YGu9Z2e98Am4dUAo9gS5vAY7LW7Ee1fGRnNVzyxPsaeBkbJsPGuKe5G2FvFWFWkA",
  "key25": "3tqLbWZjxpCgEFSKqQ6eHrMPgCwaTLStJYg5EvPd5eYAQSyuJ2GXBk7Z6NiRbB1HFdJQU2mdJAHpiUBGB5fNE77u",
  "key26": "LHWLkLYjAWBk9gWvVUkxaoRyijHe3mmrmgEnPe74yGCd8DEFN8a9P639gWcQ5zLq1nSap9MbaHyALBoyQMhQJkm",
  "key27": "4DUakPThKhjy7SmvuvnFoV2h8KUmXn6pxra1VWTPzuwr6jGexz9sn9GAmLjC66W3TzMCF8vaw2DgfCNLK7qfmFgb",
  "key28": "5gyBjLmDWYThLqX1owAJYb78oxMADUJbyJddekxd8p1R984JiK6ZGRNYZZRZPELMYDz6JTEzgUkx5LGvAUFJKFvT",
  "key29": "4s9vPiwKn9ucc7s8BLK25hrqjCbvvqCcebZJJ46j9DNdz1MGzr2PywiStJBSJvRdp9biLXKSCf2WUFCXguDqeH8S",
  "key30": "5YkaBWHGwuaCm5X3czciL29WBYvcPN6ovfrpSh4rAbAe9GVrHpBArGqu8uAUCn8CXpaKZBtzDL8WprDKuPBCUa4a",
  "key31": "2no66GHp2ySteZznCye6111wdFBUMUAofA6zc34sFdjLik6UsH6ipbx3HkDsmrdkNARPBSV8G8c2f1FiBHaZtZV9",
  "key32": "5o6QvTR52b18VGMnN3jUsVfTrBpHPJyToMfLT6xGAkRH4zD8L4wDGQyucHV3AGzXyvMcRboA5i2gE3z3pay3udi7",
  "key33": "nx4J6ei9h1CZaCPrzMvqSCbQCX9ioP53pV5NtSSxRdw2DuUpVtM66ihhG87WDCAZoSsBcVmUvSHZHeEkkkrnAt9",
  "key34": "5kFPhpf7BPtHweJqEF3EQfcfuazTU3UVurtzEG5My7fnyTe4HC3VKA3DzBMC3R23npvh9w1z3TtDv3zgyW2fYMvi",
  "key35": "4aipcfTvu9AyRYyxZgBcvv32QtWLNMcP5ahwrDM9K1SV2Ne2KKDvGg1JEdMnwiGa7jtmiKRyjdMS7L1gS5z4VV8F",
  "key36": "2zbPikTo99EjsQnto2dbVmfTQ1a1oyRFHaeRmxUGQsyqJVBbzE1yUiZGhMHVkbCg2zzXrvxH27Tu3vKpJtrU8z18",
  "key37": "39JynJzVdjbvrSM92z6bDe9BxAWFVRiFQk1wg6xGUWtPXokug8TH5iiaKnRi2fE8bupEA9fU23ca7LvPfuoQPZE6",
  "key38": "2sFmVpdUzkYXgyuvFBX1Pjr87tK5Tfm7Rkv8UZwejeujSH8NWy5xmrPyKDFosFctkWCgAhTqJDvAQazWsyKh4H9r",
  "key39": "4963HAtk68kEUJScGASx8CDK1hNi47UD6jidsC6hi4CigeANXyBaGheFbmobLwMHJGSdEQmz9DdqeoZBHPDAjBFT",
  "key40": "39VWncn85Ebrf8R4zmPx9eiYCXMSBiAgv1vHX3impirqLZgdz9F34eundWgpZmCaYXw7ERp8YqLPqTThCSaKWsAQ",
  "key41": "ePaNh2XRNpNDuPLPa3TTDg65SyFVb5enjB4c6NLvoyBBWtwZimEZNqsyhcNdpjjJBfKH2pVZBnJpQ85qq2NbeAK",
  "key42": "VWLoZckDm1u12pGepHNwhxxqMxQKdqZ1jubnCAaTYv3sR6DjD5NBhDncVEMCb9b5SpDP1KRfxDhcZ6WTeSiXVLT",
  "key43": "3KZXwR1x7Adk1oZSx4FeBXGfnjsYTuhGB7BoQkV3X63nL7tXzZc4v9iZK5uG8WjEWh3M7kVD5qgHmocxvyMduN6F",
  "key44": "WBrajZ8NHgg3waFxdwYLS3CaNsvHHPa9fJfupDPPht2dbBfA6ephvmRJw4qqo1FkkCKSdw3oErLq66bxhrzHgo7",
  "key45": "wybEE6cWCCLQJTV6czTQqvDdmSHrDoC5rAhqvfCTwduzuophEBTVPCe66Dnqez2g6CsPLJ7g4VwazhiSDRud2qL",
  "key46": "4X5Pr3wr1QP7NQd9ZvgUzn64bj82d1BCzkCjmVpbzddW3WHWYDA8pLqEiShLVJA6nUm9xj4TcM5jnwgwPZRWFGt",
  "key47": "35iJXqWD5gLF8UvHP7TiRoBeySkWFfDEaYA4pBnYaFP4TxMPUYW1MgMQGcuQ32nLAweij67U7Yzuo6Z2iijtByWo",
  "key48": "3kd6zu1ivuS7ybcNpDXZyZDWUxevYc42YcPAvSQ5tKowhNGYE5WW134yqNGhZNGjHG3S2EKHs6pVKDuf58T7NzJY",
  "key49": "UDbVGsAg2YWUHzBKJDPyYaFjKT55dZ4hYkSdQ45EKLK1qSseh464srMZ1MQPS3McaeTMdP87xXzrUapempyxZRn"
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
