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
    "54YzbxgQVMJzU5a3xD2f6N5waoNusX8o4xZTciF4PPMxYvTwn2Fh2WTNswe5ouvve6riZvkffn5HVgg2xAzP91tS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kQJ5ChbwxyHzq6gdeUAJV9knWPXY8on8LJCZWEPxSxYrg3EHdee4PHkzDyyrEYUfugiUpMEC7oCJSWyqKMQQiw",
  "key1": "5hEsekWN4PijG3cX9q43ZcT3DTjtwSvZY7snpa5VnZn1rx7r8APkwYeqmRDeegzMZ16Sa8PWU3u1PVmuyPwxwwdr",
  "key2": "2qqvJfstRRyrSETrxy142Pqbw52SCzuB8AsPFQk6W1fG6c93Uvwz2TV4K6qzEtysPdVMLHVPiZYGxmkvo9FW8VRa",
  "key3": "aq5DwewYznq98CctGvnFbBH2rN5qMEtTtHXroHYd6kWwVEdkXpLG5nC8ef5Npnzbr9ZMkDy5bWQmNWUox1E2TKh",
  "key4": "2kx5bfohd87ubYozCaBY62fwdQCXFBBtGYVKJkUt8XfG4m1AAHk3k7A4ZFK76FKUrp2HANvBF5uRd4NZTUZdPy6F",
  "key5": "4ErE8Vv6mNSS1rz6cd6krWF32XkS2hXKBF42aQbGunifJRhQ3nNwnw6nnsCzSKa3Nz5ks35N4zbNYCS3Ymm8m3mb",
  "key6": "2LD9urY1m9jr25qVXo1TavWxD1WL4WFx4Pqm7SHEmXMEFzMnMa3EVwrEjUDGwxaLycyCzRY2FVkZ8GBCqMnxgyos",
  "key7": "5zU6XuN5955864wt9Rf2MiwW3FpKnPNEDWf3kKyDAmgvHQ84gozGEywmsuUGpvuuHx6sGBg63P6uAcbwdrEfaFY8",
  "key8": "3XDtNiZm1vFoAf7bxJ1zJThG7vh2CN32KT6fqXBP9j39TTK1bJqVDBwDda5kG1Ev6fkCG5VVFESSzvfvC5vdki6o",
  "key9": "2NiBGHePMwvvbtVFq3RTtkEGLdvUmPc1iSfGYpDhSARurdXYyzc64dVwUYMkbe9QiB39AStEPMtHhgNuW31yyaBt",
  "key10": "4aGFZsyt3zU3SRBTmbLV8hd9Hk5KVsAh4i7kQJW5zxbpd4hZpSHkKgxM4ffn5MVKFkW7hpzDLErE32yfuhU2D5Ea",
  "key11": "5vXYThNUR92ZnMrLk71hnkr9JbFY9ZozEj6WRBXadBkK5mcpW3ySexhU2JPgUzDucmhAfMaheoyLYczw56oZr4hp",
  "key12": "3bry2tnexbTqLpPyifcGUhsxbDrfh5hk5pPu3cJfftgYh2rjpk2gW5q9ScA4XNsfujUzjjB83Z4Rg3qPTNnuzVLs",
  "key13": "FM3rV6PcvTXxwgiQY46PzuWD1EJq93VNRHWB6TCaQgrehUNTuzohZXevMUbs3vVj7MiNhRDmYS5RcxhjnXWV54h",
  "key14": "2G25DvBAaU2h73XkVGRsMTRH8KHiTAWLMuZx5naduqMQEZY5PbGTtkgjwqyvp7xynPEr535AfUhEPx738pxQjNze",
  "key15": "2cUP7EkUTou7wAPFPxFtcXTfJf537VcAsXGuiKGeq7UovdLTrBDxx46H1TFrcn3RXdiiWipKa7ukyFjEj99H7wJR",
  "key16": "3G4rDhftTvTeoLqhXmLRDyAbQMAR1ZiW2pFGTb8vvLMQufzASxTDYHNxXnV53jp979LB35mQoM3uhY6nQaZpQPQT",
  "key17": "2kkfMWuVtRoM3WycKQQL8psZ8bbdm6qq54hKFZ7hYexPfC2zmPTym1ontKsBKrdaMEd1tQ9sKndjCvXKKT7Jun3D",
  "key18": "shb6yufUs7cEH8oPkXAFWRcMxRg8W4U6f7zNNX1Z1b42aUf2cvaZw9apwnraBFCwgKKFffQd1h1RBDFjSfPb3k9",
  "key19": "2assdMXsY1NSRuoP9Cf8qXVhBLHc8VPSa5uaTrvuENmsLtYMTyf4x2FnVcGUAd4MgcGc1cUeexD7Th88DE2M7iQX",
  "key20": "2pBRgFvbaGgNMGMNx2saRGbRc1pseBySyKF1ZbNnVXPNrGabQKormbrttk4g9pNmLdVjLsCmaTSGniXVcvqXZyY3",
  "key21": "2dwyV44AMPireULGk8veNgBmGkTVHekDbzoVwW2DFs99cdkE185bQGtYFLopVdcX51kWT1Y37rSBGgfho7knADgt",
  "key22": "4GrmsuLJnrbrqtPaAeLzS3ErqPAmerEpgzvXtAeUoECkL3nxTFk57d6K4xXHsiycsSg84qF5K2t8NY1xT3JygriC",
  "key23": "5dY4GkBoCxrgUrgGwhermYTtGuLtgKS94JkqAEHM7Nuo1DNGfPBQU3EcxHe3Uc9oCPrxP86tV189Ps8d1ZB7FbEt",
  "key24": "397mHV8AdKdWgE17AJ4b22bPAzB2EiggLEQ7fYomDYukNMc9a6C6nQAh22NaLf75ezJcFH4CzZZpnNkN3GwTAahd",
  "key25": "53hz19rp3hZZdX32SoSFTtM3SaLkNvWwG6tWSbwJvi39K8ENMxTzv9eKPTGyGEKtfpPv7bsKdojRtekNYrWRT7gC",
  "key26": "ndGanr3zpKvKX2kVAk8KaefrYLoG8XxAGsLUZ1hUmLWYQyJpdYWY9GCgKZLBRovLkKd5UuLxsHeRtNbvM2JN5g9",
  "key27": "3JgEKHCNH52LA7xaVoRE8b78HBhYgecaAmof9cHZhLPTiamzB6pNT6N7fk4aBNeqaw8wME9Vacfr6dimecoq6r3m",
  "key28": "5NYM4UtA7rS8LXPcJGwQYcWyEMoNmhaYqzQh9uGCgAiSpXUupY453Cw5tWSQkWMHTx6U3So1bTeaQfruQmrdMMPz"
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
