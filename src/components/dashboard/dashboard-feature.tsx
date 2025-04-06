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
    "5fceyYGMmetBZ4Xp2cDuL78tXxE62EsLHZSsYh1sz4sFy6AdBZP25cxxPqyKpM7c8rywfAQkWx4VGeVmcKdvpJwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBRbBr8R32CjnRTRMMF552a6iStbYaEbTUhq76d3SE9D4jZEvQJm39JiuvbcmebVPf893uhFn3R36sp25poc52z",
  "key1": "26XmcabwGxdtcvUPFZcXd2E2B2zDWf3xw4BdZn9c8GG7DWSbXzKe9snLxYucGwdxJvAqp2KhRVneA6MFy54VKmHJ",
  "key2": "AYFr3AdFys3yoH22bRPef3bAHnt4c9ARQm2pSerXg3pCN4Kc6tGtmcmFPY56C3Qg6WqBDVuFKYnTEa8eegp5HjY",
  "key3": "2JtYHyPsajMFddHufPJGgAT5Vvp99Hoc1ev7X4Gh4xQpJqmedXNfiPxx6CvJHP2XBz9orwQMCtoHGaQ83eLmaY1d",
  "key4": "4tPfzVm3NENk2wgpPeAm3V19bYqwnE1acPeNGGaWbEcb5p155829EDqkzWxDrRMRqteg1dQ1oLrnSCiNSorhT33i",
  "key5": "2hPFexijnaDM3zTLLnAE3m4GN9izWmDPfKseL54xAvsYqkBKQMeVr7sdm4UkzwWnTRf5bVUsX2rRG5CeULrj9EB5",
  "key6": "3vmrDJc919RMhvwmgnrT3qVXygCbxLUhLmK4brGUp7CojChYwLVHQTkXeXZGubMmurffLPB9dueLAqMLUNA5CjVs",
  "key7": "7HqbLkKckirbLXfTPx3c9C6MHT3v6rpLsZyG8G5MywWKXtoEU7LyJ2acUKGe7mvfWWAYbvqQm7CYsdpWguhoCxJ",
  "key8": "fUWbJKW2UVJpdgMuHwTdPjkBTzfx8iUeNfHnkNEuzxRVFskMytMASHpXPwtGhhwtdvjyFG63nhT1KQdYnB3DqJA",
  "key9": "5mCQ4SHY5uttXdApEcDp9rKw4yBNA2n5nEbMLxpCiLB8SuvAcLDcQKakpeXxKBo3oiHqWqk9iZuFZbTDWgXnE4T3",
  "key10": "ybj8Yq5SByNDm8byEonygSwvEsNfxeGUpqSAx6bdoErX94vfvDwyuihykXd1JBWHx7eWCZ8fUm3UtxXgueJNYZN",
  "key11": "5N47Los1PogdEpdQGJEijhz6EwPiFnLmiyHTJGsBd13en95mPtCtCr2iQkjNVVtWFCutdgdpxWej8UZGkNipFAoY",
  "key12": "2zKanaHU1gM3oKv3s87Nped4ToMBanAQKL3icaAb8H266y72xkLPGrgTGfQwZF3gLCGT4y8CLCfmexJLdWkFdNdL",
  "key13": "3SwskSxHZ59Z8fEfBzoCiKTmrCKrwF2UQqba48e8boEot1coomPK7Qr92zbaBx7MVhvfRzUDTPTCgmqPqvL9dSTj",
  "key14": "2ehk5g5r4DAnUc1gzSdwaVDfcyMdoXnUfUhLzBXeToyc3Z8aBhZegKSc9jtpPipvRnrPoEZSffNEbbq9E4qjau63",
  "key15": "5uS94Vc3ciaomBzG2dP81YJToRf5oqLdoUomEScyCkjy3tfwauynGHNyXesFDPG62Q4CMRExuzXG7muZJpffh81m",
  "key16": "4dCtqNjRBWoppSbobniKZjibi44U2ptQNuKXfGaKWHCJRtQVSBYKGAQUyqspVpW4MeFCp3dgbRU3GF6F5qwCrrkd",
  "key17": "oXbpfiBXmT8Day5eFsCgN14PSZGN1qvv7wxyF3HRvu111fBTzvbJDTT4ZFHGnk6kuw3o54A2Mj1UpvgTgfkT7Hw",
  "key18": "2c8hyva3SMGR2E5PDPaZBDvYDmX1C4saT9EPoWitgQWJ2esWVRE3URqCuoA7YgYhsHWXP4F79kKpvnmgSim5aANq",
  "key19": "Dt6n2BtawjiWSRh5MX3jwozd19Hcg17NYzDiBprLatWeg4CR5Co79V1YpVqn8nxWEpeNEKnCNtknMUM6KgGncPq",
  "key20": "5L3Rr9M6g6zkGra7YiPVwTaQuqYPc49XM6jMAna7CbR93NEZdfMvVEHPAsvSHqwQuep3MMuKDemyQfWRnSb9qPjP",
  "key21": "3UXyxhA79TyajDq1n3HWLstahYaaef19PNLtqLta7a7AY2bieVSHEi9zirHuzmpnL8k6hd71y192P7B74qLJCFK9",
  "key22": "5bsTX4z1eWiB8amKFhmLsFtXXDyYpihHhpG6WN6JSStd2qz7YbkR8ZnDDcTrj9GDXViaW1XvSGkw1Q5gubs3gemv",
  "key23": "2oWfzp7ebMsQWWf6hz7RtqtTXvQr1WyM9poxwrSNktU3CSVyP19shyafDVABpYmHWDvfwyjxzoQmuBZUoMFYsF6e",
  "key24": "4nWe5tGamxQwsgf8fh8RrgxdHX8AJKLRBte6JzXoA9ouXxH966XVsmLuAEDNCD85oe6L3KW34PL1Z3jjYNFfnCxb",
  "key25": "4XiaiqNqtVPCHurPUVmuKiU7DRLaoWy24oCvN9cwXxjLokhtDsoDcbjVUBp3SJwt5w1XAL6B8TsKB5BcvWFQ2CAi",
  "key26": "5gJiaN3a4RzKjqpra9hPSqiEBWABd6fBG1yZW2sJ9Zy6CmSKmDQwvLoonN1nVjfTvqCk3tH5m7RvYtrkEiDaJBbA"
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
