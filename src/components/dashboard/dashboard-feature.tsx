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
    "2MxziDdQy8ZAXFdWmp4cfjrYStHyuYDPFwfAAMNdyGWF7R9MVaT16YYcUfCCQ1CaNYTBoUmWZJyvYQ6nHp6pNxCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxJeVMcYkHBAzDKkNnu5UnjKM3GDRWpdwg5j7JkwNNwdnGzTTL3LXAmPzh8Udi6DYXHtWWbkkxpts4XzVpx7YmB",
  "key1": "3qPBq6zF7hZbDLQzBsSjY5QXPvWZ78qJnwBxjzcvzau83oq5MJc7udVpg283HP92ph2TmQ8g2P1UMBEYKHB3VTNb",
  "key2": "4KqPVhx3V1XUjSVpQEJFNXEipsNGQPXzUDH4Nmbvo2dNF1aLViwbubkqwFZopPndZP23CNVjZurCoPSiZBdg77KX",
  "key3": "GXLyY1JCSaSsjCT3GwJT9Wes4pbLHYNtg9Rpg1ubKWpK9RGT2Rjwk3vLwoXn56Sc5vc2emosszN1QngND4fLwzo",
  "key4": "3R2tRh7TWdeLZnD1T65q5oay43Lc2dHTDHeueyWznzPQwN2uBiqGgbtQsnpLxEtDkLN6RLseWR3rTjBNembTKKbs",
  "key5": "5JzK8Ap4qrdjZRPx5HDriajySoz2WhsVMVjsLmdD99PjS5yLE45odUD4L8Ffz5xd4qK6FV2bqudGbwuQmDmVxovG",
  "key6": "233AB5w7z7D2ACLR9DxpUoB75ki1wiNn6CBbjvXAKxHKoLpFrnogHCwFpcnZMNVwDZQzu3GsTLMnch7J2Rq8mvQ4",
  "key7": "7XSBXHPjqQUiFZqqFJLS89YCAcEjx2V6btHj8ysoxHPjJ5TASJtAxiykpp6QQFT4rvfxRMVbix9FEdGTUDymTfE",
  "key8": "3naeae3XhgohP2m6ydTWvpN5x6CdE6C5TrXRAmsutZgi4z2CS5rZte5zJ6VSKFS6FrhiE24oUBG2PMhB1EX5fUub",
  "key9": "wEZwQB2iKesPXmhXprzEfsLkPLbg645vYqAgCBr6RAWod2MDgA9CP4SUTK4YLDgo99FrJqbRcTz1Cs8LkBDHHAk",
  "key10": "2tXhJVwdhpVuaDBsXQbuUE9zt6TFAjpJpmMrWfmmy7thfBgF5MkR13KfxVRKhcoR9aCDP41HtNA4vPGyxy4jbVYa",
  "key11": "5jnZPBtB5FGuLQ69R41hSFDZR1XzHUoKJ9xrtkkmjEeqKTKa1kta1iYaFdijqmBVmjLNGX22HQeaKtCyNts8SKKg",
  "key12": "63TWLtLQMxmDzs2JiVZXqKgyEDRNPAy2F6byFG7GhGwqUTXGbbeLPSCwXqqG4BT5oDrhpXbNR6ZcqpD4LmQsvDhe",
  "key13": "2ss6CoZcGuiTNqA5G9RFWdS33G9YpppJqMcPDUzWNXU5UdvfQWGbwSzieC8BagHCABwrz2hzrLER7A7DDE5qTJ5k",
  "key14": "nNcDr1nuP3xCEYKRSbJxVM8Z7YvDcwwFbiP4pdkoZZeaZgvXPho4LZCmYxEpPcmGhwk8WgiM4UNvFqqteRMdcCB",
  "key15": "5uPMcZPcobsZbCv8EXhVNbhkdjs1eucQPwJ2X9ws7zL8hLhWzzfyaHL4RdUWRVNXp1JcreRCz4U2gffweJbQguhh",
  "key16": "8Ncp2ga4RrLXMCYfWvoJxCqeKzEs2fTVUeqN5LwB5RtbKerVuceauDD5G7ekWywvTTU32372AaoCfwH8KNzZzUY",
  "key17": "3QQ3niWtL1YzkdaHZzjQZ5L1QzivcerXchsEjvGsANpaY1BeqRcq8Yc8o3Y3C12WEGY4W5xf1FLuW1aM2JpAJnK5",
  "key18": "38NJJ5UrouwZ7yixQqjbuzaxTgsFKaTtXf7CSc3SAfcEAnmsjtzFPZtksavAAy5NvoeMn42FZLLe8ysY91LqJiLu",
  "key19": "3x6Rd7VmJtuqpQXvgQDCW2TCKKFDGhGUqyEJqNDK8BYkZNGF17yVUYg748btmmD7R94u6XznupZQ5Wc5wkw7p3Yn",
  "key20": "5ZavFwW64g5FvFXsMrvmFGDy4z6zBscZ2VBfYPxAyP8hzt6wDBuYZH62mtV74JmCUxv2i9J7sxwDuvFeFhAkNBD7",
  "key21": "2JmBG22Tx5BvZpAfWSkvQcy4LFayeaTvqPyvGPE9pdxSDDMxdUAmvzXwetH1dhMPXpt11dBwA2hm33gRJmwLnUd4",
  "key22": "FzYgAXggjAGBPZy7fPNgjQiD1Rte8R4Y7htJHd8Kza9VRFVJuVqQBARy2z5N211265gVHomqjPn48soppUJZT8G",
  "key23": "5Q8huTpSQurYPisVwrMn5diYLLdUnwYin1aQvov1KX27QL1FhUYc2cZtazh41gc58Yw7XefKKP5RGhrDhBJquvGQ",
  "key24": "2wK54uMWZ64cXwnA9EvgNhVaC1WsSmcWj83NkzzNZ4Ja9By9KzkyUT5j6SbPn1K3z4tiJ8egsHMuR3evdanvrwBt",
  "key25": "3VjjtmaGXa7fMXaoQStUjh5KsPyGToiL4kLvKWVSVva1AzwZWAjFRrAofAmuAX7dUFCmXzMiDg7xVXqW9gjfdYJ1",
  "key26": "3dWhx8MwLS2F3f5GC4ffX3eGR3hEAf7x9q3YSbCaKu2fkCDjuBzndnK8AMoFyWQFmjmT58yG2BC3kqwa2LLxKnia",
  "key27": "42paEbjqHuntGYBaer8PznTvj6TWHLnrkx1ANTMGksAKxsj8mZgMcdSJMYoibqERY48cYZeFNAf9wVW3DRy43ZB1",
  "key28": "2qm3SymgAigLN2XW3QVyYv6AfppfEqwRkicX44b1s6nFRsPvegUFeboGyDD17H7bdDXV8mjzpe2YvaNGfJbSCZK1",
  "key29": "TBQniFU1ZaeYukPK247dRd2TzcG6xMcEeLPZ1hWtMPegk2Swpgk7fSDhwh5mYZum8tvJxYDivBW7oNYZNf4aKXS",
  "key30": "4HaGw4uUZHfx61Z7wVkE4MtvmwkF2TyWEVJAL2rg6jwGSycwo6cGNthT9yBUfZZUdGnixzgVcTfguiHKDAjvRHu4",
  "key31": "UpVzdZjC2ep47cXANiuN3qcZ2bFUVA3mBDstzEXmDcJQyFqozLytZkeEuGFrdQs12aWp1sgmdzsgH329EWbLaBZ",
  "key32": "4MYuoDoRPdA3qYANKuuEHB12pe49HuW8UmFaaJgS6ZGhRL1ezoo3fz7ufrEHYGTi8DkDuJi4EMSN6P2dGe4say22",
  "key33": "2ZNvJbw3zwf3UKmFBmBfkPFbgyyXVApG6Dv5NdeijJtxzSo498C96GEgBdMg3VCv3K9mTUxZMVPzE4ZAAGn8Tzbb",
  "key34": "3a2EwWnQBRnFTTmHU47MeNR6CqnagF8DrKmEjsgUgjkCLT83XjaMU9mTJQyUevuct78Pg11Ye663XoiRQXirPAHJ",
  "key35": "5mBBt2Un6woANZzwtfrd1hcdZJc84GHjY7AEuspwuhUmbA3GLxNAgCL5DpECJz79HNexz9kTEXzH2p32rNW4BFGf"
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
