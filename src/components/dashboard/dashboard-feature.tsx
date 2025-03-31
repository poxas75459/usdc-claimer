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
    "4b1mRBqcXtibsjC6yMSJeGh3L3vPdfxdeWHBeJEaMQykAoB3ktz2wTB4ycTZF48rMF1VeV73Lo8t4GshFMmM8EhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tU3Nq8WymyuAxKPMGBzYCtmgWcwERjcoShhSs8SfewcKMJGzqg61kotkBpP5TFDexJRNaSdturiQUS2p2NzDRhx",
  "key1": "3DG4kKYygkqPdVEayPYULrrd6A98hDh9M6YWfGQw4CrhNDpaLY976mx4dXxyZRYo98tcHu1oJHCehATrax98kLbz",
  "key2": "23y5Kmt51diRHvbFGnaQB7oEp452hgyV93P6ka8YF1b1pao6fnggGNu36ZLmCo6MVDnZmpCtqoQozSBdzaHrhBGA",
  "key3": "5JEHnGmTLxqKkGuqt4JnTPXS4hhGTdPZHWV6uageGVT5kaheSHACJphFNztFh1xs4iuxtSYtziiGGV8Br9vhjCzK",
  "key4": "PjZ511YS3zS2jmJQmwk31Ay4rDLgcjpziLsgJJkKgfR4RYy3GdbuAs8kewVrACLXbEs2EdRh4gqDVQQTC5V9mSV",
  "key5": "3SvsP2pr5B5tF6nB3mm2are2v8GufyRB9H1w697ohcXi7NwPQ8nr6Lx7aP5upCYogB58aqucuTFUYSqfDzvvcnk3",
  "key6": "4cbBwqQqgfCjAcNb7r8qQ6P47a3j5BSR1bmNJBVqUfQwbcXLxR4hpEKrrDT79MLwBTyi91eLDfkkrqQWbprnRtZ3",
  "key7": "25zArZzZ5eTFdpajpCwdzfVtRC8xogmRGUirjcp1JL8zoSCR5KhXkVhGAhThNYiqLjjaK9G7ttnGTNBXoZmR2Rij",
  "key8": "4VXejmHGE7DLxHrkrnmocd5LfCmExVNAXgq1bJv8nXogxMNp1SKZN8tpgqNqGeNfSL2jH9G4Vz2qZPg6HUXi83dC",
  "key9": "22fFHpVuozzT1t7DEFyA27PqYbx2gJrv1HJwAq84kwpJ4gWiAmkw4pauNqkFZtsxsZ1b8HcaqWGFuYR9B8e7Y6rF",
  "key10": "2DByMHQhTtyNYG5kBMKUju2zUrLJHiSWVBwCXDZmEaVoaGqr3J47vjUznCG9PjMi6Unboz9VarAzexVAU2pfwfUf",
  "key11": "4wu9FEhfrKQd64DZbuBy6u6gGcodb8mDzcSdwrMfA3YAkG1ysbNxjPdvtntuAEWXTP3ZRiYaf4fGkhtcNfoxajNG",
  "key12": "3ERdzCxf539iAcfMdyBU5uGuqK2n29DG8JLYdviV1Mn7fsjoEW6BQ1RvkqS1SdSuXTVV8VkBhsCjBYhS8h9nxpW1",
  "key13": "nzEoEsa4ikbvHuJvNLrV9XP2eFvf1WT3p9HS65DjheUhAKQZWeYpnF6G3Fpzsao3Xpf2CioqeimSa5D4k76Unux",
  "key14": "42a9bUjDFTW66k7EJMbJxnaNFnJ1dGgi6zbLCXCneRbV7cmLzByP4sHfHcaSsY1sgohrYCno8jnrUB3NeYaErfuJ",
  "key15": "3PvyV2rJTpyHuQZuvwFMQyVqu9mxokLegFHJHkuNhcNVM7AWUxfgHyKwmfqspCnZv6etuxk9yUHmqRW7z7aTfmgJ",
  "key16": "45dpstMfVQLD2vh6n85SKhtNgSicQAW7VrhWY4bCBwFByVo9wnLEyxhK5i52mV6VEusNY9vkeMFXNeX7vrBpyarh",
  "key17": "sEfLt7ganhgMtTRv14414s4LEJKMCVEVKbp3MtB6GnerJ1EJxSyHDzQm3hrjRvi3tHELaYbzHxBUDjkXuK2tEEh",
  "key18": "4dMdahfbtPUm4ejm8qkKg7XLpv4E6knWaJ25z1bP1i4EaTx9bbvFWjpTh5x6ZdfT4zdJpTzeWovobL9arnMyhumJ",
  "key19": "4DqG6VSEA9chXTQdMaigpcT7rwiY26jReD3RFQNtKzZJYNkHCQkpiecqPnDzuEMDqaTVagsa8fon6sWeDmMWwuMb",
  "key20": "4jBww1kQaxQgVz8aFk5ZiPBv7SythbM1TN1apQfGm2shuZi6PExtNzfikYVRJ6DWLnv4oAEpjMiqK5GB3r1Yo8W7",
  "key21": "2uwXkANGVmM54UV87Rik7tqMieHGwY4Rvxzr3ZD6sHTjab3yywiF6E2guVyFaLHbFopLG5VV6U7DdxzYFXB3dajf",
  "key22": "31EYKD7nXzvHSa6km4EK7tfpQupooBHQgYCDMnwSHfdhZ3UyzUJx9kDMpHuh5ga9g4YgrQZahKbARh1A9z2DP9RH",
  "key23": "2TYPsezAdZVFhV7LbZvBG8iNeSRD1aveX9HnvywhSLr4JmTRJPjmAfE3jQeCnpU4nKw32XVxcBMvBSYgS1h5aJfa",
  "key24": "61pHJaxHdSAJtsGDhbdXz7u8mbNQhSk1feNEmKZemWHujcZb4yvFmoKLkVTY8HKjDvFi4fvYriFg3MwNDY2HsZDN",
  "key25": "4rXbofiaxK2p6aisxQ1XqzHomESygBttZJVkSGJVMAxJPxfErDPBtWUHgGViHo1TjaqgfYoTAEJstwPzPKVShqyD",
  "key26": "2TcYhAMXVasAb3SfikR1q4TSxL4Qr3STES6iJFqvAm9N1jcv85L5MC7xDMGaGpA6iivcKUTJZRyrvcyHjYBQTne4",
  "key27": "MQ14QT1YhGsHEvaT1UMP9cFdk6LzfVuLgc2ZhWvT3ZsfKacsoX3ZUaDQpWFQZLLXCbxk6i77YXNAmMrqn5aPyLq",
  "key28": "2rPsjUe632Gn2coybw8aDg3d6WhGpnawAC2PE7ysumMvhKz72ebwfGQbxHExvVo1gA3j7hGbWp2npsJN7Mtg6YBP",
  "key29": "3sWXcsiDGg2ebBtio6CUpLkrGK9XJZRHAGaAqkGdV2LdhNfJjgEeQiwfGU36BK3DazXq6RNmFkW53FeuCd4MLWZJ"
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
