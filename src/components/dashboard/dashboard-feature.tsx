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
    "bQFR6zuQfjddGsXmdwcHU6YVttaJt9sf7KF4G6CaEDQ1AXN7T7ycMzVLwQFJncbW6etdZePcQCnmUUBS8wyixPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kX12F5c7C7vGKwW92GEk2aiTWzk2WhdArjKDKcc5qVrZLwgwXSMHGTZtQEMbbcbh7AJRMQ9iWZEzCLvHEg8SjJ",
  "key1": "3wQxvnp8tsYmF6ervQyEuRUMa9rxf9A16DVqR41sx6R9xGcWvANYigbtd1Z1QoFmgP1FC1Jc9uhDUrdB4DsRBwt9",
  "key2": "4zMc2K8TqJtSYum6JVMssx8EmQxoCTu3wrRcAtGesj6kqCiM1PfsTMDHP4s9R7AGwuXQHtWk5KBeLuunMbYAUy4n",
  "key3": "Rk3Snki68SyrW4MPTxFFcAAU5qYZzjNewS5KpcnP6d1cAaZLfWbwbifoCCTtnGYYzRt3rQFRYBkPu2X54dYkKWj",
  "key4": "5qirJH3YpEKgHGKWUvpVTTEEdbmx2eqDNoHMGee5zcRbVs5tfc35NsSybi23jULkEQtcVtA8os5LUyF8XPkMR2Do",
  "key5": "2ChigBBeZsvJFTEpLRjzAh2HW23bRNkfhGXgBwgtWR5DBESF4HnyQCiasnvFoHLucrTkaYsDzksnJnDzNH7pHF7k",
  "key6": "22cZepCdcPwdPytDW3zkQrSjS6h43E2biCJbDvQeLe2epLadh21QhEez9vtqo2mhasEZioLDvh5SeKrFepvesQv8",
  "key7": "4bKjNdW5Eu87w39xdFtRjHQ9Fk2RbhexRVQqqYMn5C9e1e18iGQB9MfMzsRiLqMC2cxxvNwKScNFfCV8Lrf6z4v2",
  "key8": "41yCxLpX2sZPvtGhTxhEFCAC7yzDUwsnE41389KLEzQg4sqNyub4iaLZearvb3M8C3MGLj9TsRfMmN3cEzKrhR2s",
  "key9": "pPFYrojkMEvqxRC96v7W3Nm6agMg7aDfpfmknL84wJ5Tuk2nNA2j8WGZrm35wiSqYLjc24HbGf5zy44SLwQphAf",
  "key10": "36DLofFCDrpPga4nQmJP8zdDtsH9yZK5P7tB8cgqt4P7Ta6DwNoL8oeBrehviqPyBxFxVC8ED8bJsV6DMtMUBpun",
  "key11": "3RBmQvviNG7CU2Gbs5bzWGxmBxLDKc6G4hhhaHBjkeSDPCciWYvthR4E5qyrZbgrsr7Mc9VDJEBBZ6VaneZApUL3",
  "key12": "mDAaBPNnYqM4Nqu5jsM1TqmGCWbbPLWPHy6ozYPYrbdsJyaEhyHSzveQrpLhgZ949W99T37yDtfzSrjVW3F5SDs",
  "key13": "3E6ayP5D1L61ymXtqYEkFGj4MvTL7zDzAMFfY6hzhdRxyRoUineUkASobL4f4iWqCRvcJ31bWQSbsKDZAtB8cyCo",
  "key14": "3Hp9QgatgnRaesmFMs9sJtAwomjbL58B17zt48NGg4HmSdBZ2ZksoYdi6Z4YRcB2iagjDWynPGqVugwu8rU676ux",
  "key15": "3ovhCQqou1jnZ65rp4VJLQeBsvWDFH3spKmDz94YLSvDsebWGt5NSB7UbjF1zK1CPtw78WUVwwDCHRo3tgCAdK16",
  "key16": "4hVwrLJ7avut3BqPkTgdxLAP97FVsgydzgpHKaGvHQK7xFoX2fPDmLGucomxHG1KyvwLFmHUCxWRn8KYd2WKbvEN",
  "key17": "4zHXzDdZp85yDexfgPQ7CLgDSBoEUtemzdP74gm3Dur5traD7DG7DM7942Smmf3hFYosmFWtgdMow2NXJWjFHJDh",
  "key18": "4P23wcxczAWqNNhZRBf9uDqZNPH1FkzwQgK4PRF1wJECNf8Qf35hzaJqTjdH7YSzijsCfdoeywoejLhq6pqoRpkj",
  "key19": "49Zki87m5Vx6tsg7KpoaWbZfugcUE6uPw8PdWFeuM8UrtV7GvscKtJZAbgYqrS5hJKWZNHPaAWTs4t9mwdPpghgE",
  "key20": "5BDCPK8rL4tmmt95imT1vj6PmwUBRYKH16k9tLUWRjNzcdkfb5BpJ9j5k3eh6gM7ZRE1fFuXqeQapdsYQavdP8vT",
  "key21": "39p4AUZ1EWGaPDmiscQ5q7FBxDzdF74eT2FHmbBpaX2Yh96g4JWAycBWvU27B5r7Bght9bX3iXjLkQg3aHuPy5YH",
  "key22": "2wZbbckSdWNVuf8oieqCJfmgxArea3YshXPzrrSHt89VjrzGdtAU993jcLSmiKiyKV2fHkoNFKHUeKcj719sbomn",
  "key23": "4DyDwnJoja6QH8nbFd9yMbFEUiFt5EjX2QmHEpMdN9fAtzgnuh9XK9jhjtBPjJhTdb3cLitiZzuXuEXwrqbKcNPo",
  "key24": "4sYRXMuXXsgTnxfRPpqDcKKGyGguox56NYAotF5UpS13EA6WwM9Xviu4PS2hAQYyEMZ7zRvUcm7DxHttGdhhX6Pa",
  "key25": "4c6LvBd7N8bGXRadpDZj8rfzcowXxQPcNgfHCWVwMQEindeiAigQgTbk4GEXtJq5P5iw2QiPR1Hi1nTb959gssWB",
  "key26": "556HWUFoSTCmNPrfgMNkJ1hicrjLuqyNPP74Uk6sbjbjLmYThUdv4gGkjM4wtD4pbGu3wDMDUSJwXuz2brs2QSTs",
  "key27": "yGsF16DNnh3LP9AuL45r9bPWLRdorwL7DrggsFe4uFonPLr6fJUntW5k8Z4Sg1jx4bceKd6zmS9ngdjvp1Ent6p"
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
