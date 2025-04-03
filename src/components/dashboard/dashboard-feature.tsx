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
    "ZYzSSdaPUabYLoPQZ9fcXfUvAc171bpxDU6HedZ5re4uRZ2PipZwLS1MSAu6s6pvAp6s2bx5yLpSivkCygNoUUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwPD1ZkqC2crzaRq4mbPvM8kvzFi22i8P9K5a7sKVTUHqC754gP2xSQccQqS3CcBz3SwPm2z39h7WbML41ahCHN",
  "key1": "65h11GaoVQa21onjxPqWJw8JnSFByNApsb8QeutegL984diGCdrKXmYfbGVyzEdFZX8JLoZYmtjME57G5XP1YzB5",
  "key2": "5qsAF6QaMbVcPcHuQ2Pt9TuYofdBKmzBTu7UyKJpC4cpHmGYhX48TJW9RrxSY6s7Pops46J3Sn64AY5rJYmjuo7y",
  "key3": "3S9BvebSc1zFA9Lbfu8vThAKAHQFV97YyTUjmFR8Ef2dgkJ1xgqCNWJf28XhEPyxcRZMBgAqNoewyXrB4qGHBj96",
  "key4": "2AupjGfJ9TKUWAiNVoTcUcSFnSjrRjBHKjJ4R1K6gNPvJKc8tTGN84qWj3yomCGGjY1ZJnPKfxAZW2ChVKvw9oah",
  "key5": "37fiFAHYu61Vqp1SmyPP2gf6rBtoR7t4u2Hqy7ZPCmaa5fTXPG3frtGeXNCrqnqeNUSKmoN77QAXwyGVcKBBVpCQ",
  "key6": "qsTgmquQ5sjJEMnZQehhC1PgtfBHkFguWQVnmuao1LULczdxZbeigxCpBskq4ego75ebnwSUCFaZqEaoNVQqd1m",
  "key7": "4amWHvMXjUjeRy6WLNY9xAWme78GvRzdELYja9FguwT3dFBLBnCkJisjjkDt1jrxpAbDMYTzEvGUku2RqZ2GPy4s",
  "key8": "5MychJUgYsBgQmG2tKu2mbcuofymZvnP818CPNf8N35J13NFpxNwqi2hPiMiGwz9LFA7RtU62YdGKmGkLRhLZKEo",
  "key9": "3pSCDeZ9V7LyoqhD7QbqodbYTpco6hwMEVrPzN8RdiGH1vgihSXKEbCJ9XPtruKNY8vbc2DMC1CiTqXrNKDb9R2N",
  "key10": "TAC6J8NaMRxBmaeZZ4A6Bd7e6NtW6J7s8EcyxhpLBEj4ps2J4meAkm8pLDS7j6Ln8BrrsDcQQYZAwAujTDCDqvJ",
  "key11": "5UdK1umZ8C82HVr8o7gsrqGnzDgE99matTsU754KzjDRmVD6LfUZWshNKLDfW5bhHNsrzPnqxE8bs1nJoAMhZrTi",
  "key12": "22APvKX4n3b4TsJsa2Pi6M7aDkDt7SR9dunTgmK91ZBzTkAMnSvgvrvxJGTWdSomVukTZwHfCv1uyGK4rVskNycE",
  "key13": "56RB3uWzAg59FE5yBGWXDzKvd31mJrdSW4yUpmXUx5bt2NJEBi579WjPMHsb4ykZXU4CFXf7RWjMZymiH2xaSngo",
  "key14": "3BamWA8P32ZBA8reWjHWZ9GcTEgwuBavTN5mwJ7JDt5aamZhHBYAydiF7ENFYy5aXT8kxZDkf5aF7qmg1gi9Ddj7",
  "key15": "53PUkFsTC9AiBQYbDimN1fw7b5bU9GuewV3WfonqsGwmQFVz6JmQrR1houQmdnSXPb86gYrLzCZ6WJx3ghhaUdJ4",
  "key16": "3it4tgHRfU2w72AA89TRXmjkBcb2thPfes8s5iFD4hFUjx7KkaKUBQva15QW8vayKcKBBCehHy9DPZiPu4qg81sm",
  "key17": "4PTZSZS5XJQrzJVMxSFJqytumMfKHwTx9Bb551UKZcjYpjnhVCUSJHiGhMjBm3QK3Q5ds9P59Q5kF5LQJjLB3acr",
  "key18": "1THfoDcfPibLjKCGLGWXSz1UtcMKECw7r6zX1QnAPEGy6eVHP3vM5UTWDp975rkb3ZJoKwffs7S2BFnqLLAwkXQ",
  "key19": "3cfMvLM81kULxt5bNrompPpR61UnCcrX3gWQcaRT8EFQJsQcLwgWnYdWkeZYePkwEH1bMicJsyU4HZazdUKMbh4p",
  "key20": "61w4JrggGQLJz9d9wB8iJfwLTNL2JiRXBkaU2eJZBvZkTTpuT1uHCZ87cmBbp1jHZYwGUTY2LZ3c5BjvjCuBaaij",
  "key21": "XqqfDcYKX4ijVzRrEQoLaJaU7jsaVX2KryRJTTKicehDfLKSPJcnpCEMaCDuKmnqg3EAA2ebDjq99dTcAYohMGu",
  "key22": "33qpTGFDdRkdoSHiEp5429zhY4TEa6ukF4mg5DERym5yfcnjq45uJF2RxfwV64bA7ejEnx7VQf73cx2yRoVxXoYv",
  "key23": "5icxfHCRdHyZiWUP3n8m5HJpJGyrtQHYHSrVGZCGjtfJnXyJZmAFM4x6oZgUKfojnXJVzknWUNqyVKw6CsRYei4H",
  "key24": "3LgZLffLhtXTWawRAfqKt6MA9cLxXwu4G5xJcwcXUzBjpjcsWKzZ9XLbS7nSMNELWpojZznsx1gP4h7DvrpG16Nz",
  "key25": "4Lp3FrSnNTi56sxNC2H8AsJaCdXvhG18n44YYnkHjrctJbp7CQ1UdKRWuBTDwmEQDm4K5Z8tVKGAhWiUqbrHGLz3",
  "key26": "3WPc8SWmhCxDn5Fhpv4979QKhUcmETXq3qiJhE4W1pGAEUaDErBxMJovbxF2XfdnPu4mZb9D3RpXJBdBMHJeP8iy",
  "key27": "2x8KCTEriLaCh3ioSNAEnE5MADEucjJ13is555YHoyNkSrj144uMWTS1d3qtTWAyH7meU4revaYij2mntJ4Fqsp4",
  "key28": "1bHwLNQ9TnNyUmi55jLZ8kcwU2BnVS6gHQinJbxszYbAKVy3v5EJuHaPeyTDs7huNanG4ShwDNL2q6XWjHGAzJe",
  "key29": "3EnGd8qErHwxP9sfjhh36dgWk3rd3JLiV3EFjEJTTU8gdNn2hPTu9buufY5g6Wv5zLNXRPEf1Cfh4MZK1rhYuLLe",
  "key30": "uvjPR2M79FW4gR3qMLYXUCC1h8cy2yp4uuyRtExnVUX4Gab8XSD5UCHBNFXmWLMVx5ASaQD2bmT2Zeky6Hd4BTV",
  "key31": "5rkJfEt4m7v62QPvGeAMNgE8tnahNyqJon8Gx7Dk2ezhF9zaKnvhkDfsHed9mzcwd1a4k2Mu7jchcmEKxmiiBPj5",
  "key32": "3UcxfUQBhnfxAxfG5zqSQ4nLcw3uQNZcBcVXoXQx693LjGJK9bTuCptYDdmgH3S9m92qQytPrDHPxrTdSshFz1WG",
  "key33": "zT7gMhmGmVqVgfeecMmb6DNSk54SmRzBpTwBq21HcREJpc522NYfp2HktAXvP6StNWD4LJtxeYp3X2hws8ESygt",
  "key34": "V9Z88SUS5KDtD3WvmuystgoS1BokdB7BKUT6vFvpeQkP5btyt6teQwUGPV4hTv2LrGiiUAWmHzzXEyE9qckVikC",
  "key35": "2cLFw7YU3Rh6MXuCZmkR8EhPxy637uefLFVZQdapTFR2AkwdJ2S83ponYbMP2TkG9Md2uj1Uz92s1zGwZ2MCzCfA",
  "key36": "2g2Vji9gVifGwpLY1HiiAUb4QhzqDHGjJmn6ZHEafp9xpy93i2LyogXTbxRoyk8dDYjVMMSd4B42NNgiKkokcQ3a",
  "key37": "ZEDxaeVQEV2USZhKtFBV32g1JKMmzboq3zDJuyML6cjP8jw9B8Xgj2CmQdP9z7Z25yJKFePRhhmWs7wuFpsyPfJ",
  "key38": "3evuxXiWP9LYWS6Pt8AKXmavLDv2GyDxAWBvLoWGV3fqMRHimkDrteyCeuTZVt6hUUgoEsEwwGSyPF68fFUWM3sT",
  "key39": "64VGwNdSRJR2t2HJGJAfVV5vcNhT6PXmTS8V3cEo66DkbwG3XfZgs9e2VVwtPJ2yXs1vL6PeR65gWmAqKVJagjMv",
  "key40": "3TRvqy2kro8HCLY9WWwLBuLydBqsZ98DXqaM35paLf2SaHxUPXsw6CaViK2EwkfBHrpQQXvKbZod5GxdeGkob7ke"
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
