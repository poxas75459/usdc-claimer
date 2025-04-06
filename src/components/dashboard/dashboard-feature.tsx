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
    "22JoYzohoj8bY1JXQxohHfspGBbPWpHAGaMM2WEB38mNcSnQBiDVZFgxHP7gsVJfXu5tJ7rZjuwYpfRQhgBtMzAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SoHJfNGnywJLmpMgcaWPvU2YettgKpVbot3FoamjzQKkQSvtysoFX4Ld3TyP9dTZeKfbnUYAcyLMKXvAT4SDQiH",
  "key1": "hHfsGqe2KXkvc2bCUwZsmbPMMUKYviZh6du31bvPvVp8818u26oTSL84uF55UxRgnCr4Z6mtbpghkM4KK6H5vzy",
  "key2": "5K9g85bCYYUouizqCxyhDadwYeYSoEZ4dpsAnMGgzvUQkTX4na3vFQPwZtdAJJ1QAVETUDcX5Hsab48Td236NsuD",
  "key3": "4kYj6NCkQjAkkUZEtNiMZi5bFerURJr9Mb2oWi22WanZbd51LtJrqgqWM2XzsX24N44RfTxNR3aknjkTtx3m6WZi",
  "key4": "5grfXmXZX2evfoZuW2Hox21HwyCZn5RoDqLqq6kdEHTFHbWyyZ8wtifrb41cWtaGwvtPKaeTzwnGh4a6VSPPp5VW",
  "key5": "viGCwjYnYKuDv1gq5wndmJQx79M72xB811sELsPaojPKqDUxth4LUqX1tPQaTM7L79ie82Jk66oiBkXGVAoYMvY",
  "key6": "zXUWdDH34VCYuk1yd8YmV8MeUjZg8bnVfbLEZQ25SHeWqSsW9SMQXCHL2ggpgN6hqryzZaKo9Nsj1i66k99He5C",
  "key7": "4Jm7txMpGoLoNZPWQCtnHdWcGCD8XdMF6NNyEiH4S4GXqrxLvYJg2hf1P7GadsxzJJ5n7ABmsP1FcBBEc3r4tCUX",
  "key8": "5XDDcrszsCHn4aKptNQYU28JQXPw8RHk38D1zXS5DQCExoV7WU2Z3oJE3fZUYeoFf6U6YLYXbiCKuJ9iUMP1zg1h",
  "key9": "2Rn8gW7H4JrbHTE2X4wwwJ2haBFu8uVs9KskTgrq1J7mboBMNk1HVmNw9xUsoZdfD768edrWPEsZkKoGzaFuCukY",
  "key10": "4NtogQiwJsU1Fcxw6z92dgUeNAdUqBN6wvGsb3fENWFNuMrAGyMe3wab1J1cGE5xFNxmLniA9w8HZZsmhkdU4PVi",
  "key11": "4VCbbDe2D2EDY1YtaaZkSXMVN4jD99XCbanaeQdiLfdoPCTKNrtDDtKLvkC95H6AaTm84qt9FVinbUFUWXvAk3aU",
  "key12": "37G32NqXL7b7q9TrrhLGMJW8kumcoscfxPNripXw8PUtbLwd8SkCvsD9bwnXRWFmTec78i2wG4uPtVWGYxb81fge",
  "key13": "2geRth9bE8A1tihbfKNqbxxMZyZXRM53pqHwYUWUtq5W9SHNHM4x7LfDypoiMWNiiCDv5bZkmKCznxuDVSEo7kmY",
  "key14": "2QfvhGP7mHA9gEeku9iLd7g6V9omPmEcmFLpBMVHxUFYWNtqBYZCVdKEQbUHuiHvwqa5Mj6bvY11GVgyyhGFcWm6",
  "key15": "4fEtXdjFhMyfwEdPfpvoxneAsU2W5RrzY68X4HRVCM7HEaLnDKAjf4gf8PjgB6zQVbUo6TWDvPhxDxGskCN9r6Bg",
  "key16": "5AZdfE9TCDPNfTFg4VSL7HxcQ4UGzYuyyPGnqVKaGEDzyQdSeML4PEu4WqKoEGQuq6zy4xhoQJU9pkfG9CwR8jKc",
  "key17": "3dfCy1Sh8x1yqJ4mNyVcpLQ3uhgf69sNKiEu1mnrAzicFTq3eDgJsVi85Qon3YPnoexjzqhJFYoV6v6WuxFaxiV8",
  "key18": "2uCwekWs2yTaxbKYm4MZoC6LncX4ffT2NfKRPpNcZSQexMJWSbMm5VxUgmjdYhyPRXBiVyR9ZKkFdM9pAN3Dcujw",
  "key19": "3RJfdZZ1t6A3NQ86hWE8j2cybv5DU9kdwjpKxjUuPEU7bFkRB9MfxFcMdKJFaGdJngbLMkWGxzz8niEJ3R6F5AuW",
  "key20": "Y95xioVhV3hisNQierJXXqKRxmys3tjEUkTkRLhHSGkkNw7UJkAjXcQz9RL4xqiHiVpqAcNFLL1kTqi71FecBLf",
  "key21": "6578CxwLivKwqvtjtpistxurCiYTuPtqTPhFjzTFyUxzcANZq5Xh6aXeLkxT3xU7Dsd2TDmgcvq4Tjhano869N4m",
  "key22": "xiCZ32fDsCTXa8wrZs2NGStUncoBWLuUB9ine9htLcg3VBdkVCypLMrcnSxcveGS5QJNZ643fNaZqyMDgbC2XVN",
  "key23": "4eQWYUBuHBey4ns3FRb3eVPBwkmUD83hhUcWePNVp65gcd6QDYmV28jfdSsMT4CHhsrcxe5pPxQ2FQoT1hfWrFZW",
  "key24": "2qfEFi4TmWNci9TtezAmJY8SrNZjHqs4XzaEJNknsSKiHfRWryqLrSdkr7ENXrqAaEvkQU2irYDfUSZecHNBHPTn",
  "key25": "41R8zdjbkSDRhEQMJuCQD8Pv23X4LF1Cjj4S66AjSR9tr7BYTbqFQ4B28hifFMqyicnYUL3WigvKUZMpUU1sVPjE",
  "key26": "5vd6eWH2CswFdhtVuS1EKp7MMgiLBkD3Dsm8DNLHYEG3j7yg3bWZvSVHVaEqsZPFmUq5nSAeGJbko6CmrQoavvDy",
  "key27": "3wCKpDdVopk5WMfvxznqSgDzc87AsJAyQcAmxFC3WFnedyE3d49M6y93sZai9LVFSUEiGMMkzVV8wyFp7Ztm8qpY",
  "key28": "3aZodfq48vomgEF8u6HN5kgojRVGer3yJjS8vsyHPVjf8sMYAKTbP379xjSApURrZA8s1ZtGW1eDGb6XqnZ5taew"
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
