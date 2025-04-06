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
    "3Yj43hjkr98MY16pEqBKiCHGqYC8y91YcUfXfUujSPQa7eGFHQctSa9YnVLr3riWGd2fepKen7o3zTeiYzTjFFg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ZL67meJLryRMaPgsQX5xPTxnHAoJzYUEdG2pe1MbvvhgcpVdDYyD4pc3DK9HjPtSLUQ3WHF4Up4xZx3W1Xr1qD",
  "key1": "3PFPtavhCDrm99Ns1pa6o7yu2HCCgXmqQNPNYkrFKnwD9sSNV6ViryBJhVb6pXf8v5D8tgqCGejruwnFBdQWaYtU",
  "key2": "2SyvXM6R2oWt5dw6avribrX3Pr5HxaXwQvkKAYCBwEpta2MpM4m6PzJcPTxLAURqLcBE4b6m9cJgCGjByg7Ds2RC",
  "key3": "5cgzf6fxmqjEhpfBjFjxsqa43TzuFdAAs1NEwbCJ3f2fjgncZQg4wXZkZBsoH7d9us6ShNYEGSsr9Drr8A54S9eh",
  "key4": "3bexe3YcJyNLcASAwcWhyyJZ3PVrLcKE9jTqt5aUoNSAwjqZ7qjPbpn3Vnru9vttVgQzZrXVeQjaSTgMWfYXSjvM",
  "key5": "34tMXDhVdQEtjgXSnt7QGySrmEv4jq17XT4m2GnkVD2K5AhbpNw4MY68ZpzbMLSkEDvhSHZs6W9gR8yPQYFBuJUL",
  "key6": "2gGUAbcBvSNF7A2Vi1buLCJEpiRaU9FASjVwBAKMXtugaekiCFEhAxkq7sy7Rid6ZPGBZBkaX4eMWN8HZpgRTCZ3",
  "key7": "2i3mviMchCDsWzWScnJLkCYVyfbSoY8shxvj3dp5Q9bBycjzTLNN58mkKnj4JVrtzbSSn1BQuBz8tV4UAfDhnMkc",
  "key8": "53aCHBvqeUAdN4J7cHfmDV8WZuPVo2Xa4tv39xgRkVoh9YwgvsPny6ffuGp7cWbupj69oZqSVwN1HnpguG7dfT7G",
  "key9": "51adxmXjLRbKikHeMCfTyabDXgVyXAsn5yi2YRKQyzBWHkTHqHFfuAXrFDMfnmRmiepeuLeMsPxrhArd72Wy8oXy",
  "key10": "35CER7aX4SYy6eCo3VSwnLKf9BXgu1ar2s5MwgDjWYT8yB26so43ra2NYEdDxXAyLHB4X7GY9z6PWSzjPD4QR4GM",
  "key11": "31hi6MpR97yF32JByFghj9XKLoBcwZktcxpij5kWQ1tbVSv2jKRi6fBVcF9HGZYAYZv3HR1CXZTMEb4MsH3RsRoU",
  "key12": "4488LAKJUTTXLurCKwP6XcX5D35pDB5adr1oUHa4XWiNexDZyq66xAwts8mAWaWX4CtPGZouLx77AJVD9yW3pJxz",
  "key13": "5DLo5U22yv8m4aGECPFiFjwDqusG6X1oDHHzDX5h4YVimMFGqZSFbrjauwJDyrDrhCesPRkSSZmthVragL2SHfGn",
  "key14": "zCSAUkSXb4gobGhzz1RMu33E46MhunuRraVFLo23FJzv92fncaGrtcNfKMuTovkTnAmJDpzVEg1DZvXgLDZyd9t",
  "key15": "bAzuo28uR4r3rUhSaiQc7wG17HM157nn4sRp5EUPX1TTNpRcMH8KT7VpZGvGx8JvyYgfuKUcYAEDL4LU83HQPKD",
  "key16": "2X5xahWfqEvKVDkJrtyKvnzgfWs7pPF1eVGRujnmxuuT6Xvmh6icvpwBw3qBf5VVnJvd5LKfArSC9KGbHMn5bRFi",
  "key17": "5Kwg75nCik4uRqvydTh6o6jhKu74fd1ri8mWaDHz4wTeh3qAPiigLJCEgLAq4bpbeqw5TE6D2nGR6QFFYx2E9c1e",
  "key18": "3AbHZqgSmAEzi1wuGMPgm3odMcprqCtHdqHkJnkguZob7QvXYebXQEtAmR5H8n3cjrRz2oGhmPP1HT6EdDb8Br3X",
  "key19": "47PrigTjL195Whgfnm5trAydExFY9XuHLJyajzpb3mszino7kewDdFaZDHATYmFc7KDHCcaGdnkCijwweqyXoR4h",
  "key20": "3aQ72L1hTLQzCHYMGYuvgXcuD5jhqWFaDE97Yxt85tB2CfPeGFUrKjTgimhwXdWLm6ccCRjrmjwCTK9oK1Mn2HTY",
  "key21": "5nnCWyHLppxJhwf1FqcbL7MmaBAtjaTCAHRaqHVmVxni4BJ99xCS5ybFzbkmChSxVMvkHpgeQpWZx8MXZjDA8nJU",
  "key22": "2K1famJYxab1L4zgt8RUM5Tkqnrm7698FVTf7SktiC96RTajL5en65rJShyTMdhh2EhtAQoV4JhzR6ihC9oAfa5R",
  "key23": "5VfE5YTprT1DXSUsxPvJLdLX6LpHwnJhBMoaL1PnkdgZUuVw6XmsWHri6ECFAHeB87AsLTZ1vRr5weSJkN4LDr6X",
  "key24": "4jPWM9pzTo82Mot4EbqGiX1Nc77bC7rYoHnXWQYKjqNzAk6QbSy8QrQgFyufQ3FwwkLMU2PPFNSoNu2wcP3rJHyR",
  "key25": "3Sjk6TU4x6SY7zTy4wWEv5xtysJXtyMYPD3bJYg1ed9xSk1rAYKGhd8sBeR3a847JXnXebpYNdwtbPGQkevFXrvs",
  "key26": "3jyotd2eTv7GqCcLmw89inxVSuLLqtZqTRmL7mG9iV8DAF3Z55DNxArkAeBoFXj6Cds3iNVVdSPJ2WYuJbSatqez",
  "key27": "4R5HcZfcKstmptV4EYMrKG1dhHvgP5kqeGxNdrV8mYqZc5AkVjPbnfCoKZuB8mEn8SxnUkQkb9K7gZpGzHiqYUhb",
  "key28": "2LPvovCj7yYUitKu2nWM7aB1CpiGU6d7x95jJusfgore9iL3NeYtAN9sRaMfhgUVwpnxRszsWsXuqA64Y7bEb23f",
  "key29": "2WjVxPTMERFYvQ2FheF4WePqiVpphvXtFDa5XkPG4ygFMdeSbQyFNZmMdWA4kA9GZ4BZrwfNgMG8rUwZUsbPraoC",
  "key30": "3QeRT8egmwPsJ8FTpY4Wet1maKcAKP45jr63rHebnjiC6Tci6XYL26bBYvvd1diC1ozwhCBe343sDAUAArgH54Cg",
  "key31": "5NiVip6oneoyTDvKMUZxSrcxLrrpcyijRXLPUbNKyTn9BddZjPmGKnCPTzHjpooKXrqo2E7rJXevUy8EBQYiP9Hg",
  "key32": "MeVJM1F3rD7vJMkb7x2wXf2VvMYxHhBUEkhrTUdpAERE978K3in7JtkYRN99v28Cg4NmonwhmzxpRcHAMCoVNE7"
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
