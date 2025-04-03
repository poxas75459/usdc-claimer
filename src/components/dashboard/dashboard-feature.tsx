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
    "dFnGwwUTKXQam6wurf4DogAcbKENJrrimMteTBhExqxUtviyoajWouUDVHfXheTqKxB8WN1wzsFHWLHMi2qHMNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWMg9TTxRjpv4nQb3cSzNZpqFiM28GYfbRcTGpzDm6A3DdaL4x5SqV2BaGEXnEmV1vEWmn4knm6iERiMetTLBc3",
  "key1": "3Ye9B5VG1AWnoRnrKkRH1mjrUBM7dRfUPzp1EafvTfE1Ap2akYKRFY9i7UQPSyCDGM8DsHh82LhiZGQsDgeHJnD3",
  "key2": "4D135JKAEhaZ9EJcj94J3n6hR6kETGZTH4a3cq4qN3rq46XmLv5ctc1fYyUzG2csMzyKxxpsWWMWxLmaSThWWmnK",
  "key3": "5ZC6btUU3DWdEmK8aegBsDvP5pCNu8Pj1F3YRkU25H4ZviPBY1iYBDuAoToRS7Rv8G6ZgSt9yEkuNpb27WRKKFYf",
  "key4": "3N8d65hzHabyhLx8F5JENSZz7E3bVRTRhshMawT14GzbbZXkoHk2HZ7gFAHwddmxcAGtqukxSo3NzzZNYo3jV9Bj",
  "key5": "2HN2Gz9qFLmnsETUi3Dr9vXkgsm8JXSmKFjxpbY1NFbGo4nF3drrejz1FZrkLLq4cyLUqjx4drnT5sMfZhJ1uucy",
  "key6": "3FvBEf2fvHEH62XF4bjbMH4PMDL3uDmkw6bxp8tyzxes3NpDWCDXeoBq1xzmV2NcxHufAFkVU5YgqQq4vAz1SeKC",
  "key7": "4Yk8gyPrt1GauWoFJ7nMvX2xFjb7zGiuLeVh3DBy2NUPNV7gFwAGRiGJDzCxuSXbepiuJL7spLHsZeWtLrXR4uaR",
  "key8": "2uhcPTbv8RuoJXD4nyovFajPyF6xU7xy6erfYdHaWR4u9G8e5HWHcJKqG8nMTV3H4Jvx9KQNH3ptFfNSHCP2ood1",
  "key9": "YAfwdY13PPhcEU2qqqzk2tq35wQV5SsdrcQ8u1XAiL2eytjemFXrfxL6784pVYvNrPddCfYxBMrNYAoga9G2hK9",
  "key10": "3mxWpE4owTUwDGYuicpxerBfsMaksrTUH6TGSBSAdwvi1mCPdFsq1NskvdH7huwjcsRM457W5ieWHn4NG7NXqdP5",
  "key11": "4cMoQCZKSmhEavtXxizDKEmLKgso1ZtrhvqFbFBTp8F2zW823TFwaTA9ULPGZM2UUaoMqrpKd2Zve5ftg45mwj34",
  "key12": "2Md9V2wCuxLt5am9X4EQaG1yTWNnpUWSomfLT22P7BAL5HMhack6ALhNFNAexPKnR6DCjzKtpnTxo6sXJU8umLqx",
  "key13": "4F6ycUWncMZ9e8zSndaRhA7Yfr6mCUqN7rtWwF47eqeaZiJthenS5Bky2vNnqFTB744jwaPubQWcX2XoJv1foH2v",
  "key14": "5pZgYg34poLP5MUHHMpCgvGF69bY84QggNyseq1n3QBAUWXNe8njD5RHpbCFmWLq1Q3ztGnxmQYZYZEEBdpbtV9J",
  "key15": "593F5rXqeaCSDqhkZE5Q5BRbFNoeRWKnnhzq6eEdXfM8PZUJfss3GFmk2vWSAHtLu93rGFSNQRoNYKMiq8j7C91k",
  "key16": "3wDBChyWRoGn3AB4B7b16xSYx42w4iCMvZMDa85f5SxW7L4F7qaQMtUzusrCEMkeNCtJL6g8jdgdD89HCKpQPhLD",
  "key17": "5P1oin3B3rcCsE3s1jmyM5HTEPuTjMK66L84juCVCxaCJLXodwvtKUhHdb4inDqHTs4yXpfPLDmNfsyGqyp2WJmS",
  "key18": "2ghdS8pPtQUMFHydj7MVNLSytuDUNJeKUrreBJFefeVGY8E2GGQfKMG3ZHboxt4cGHv6GHLcDKZ7xHMdYKsfBQzy",
  "key19": "u6JEXCRmbWUyhqxV4P2Hv9aYhGT9CVofP5jkmna2DagqW2bWJv2hGH8orLGNF7NSH6CnwfPpe9t5SvjGCaJjiT5",
  "key20": "4nkhQTgRCGwc4pEKL7En3gQcvhxZkUwbzYC1Eqx1db5PpwjdEkBp1HhQBSYJHLb9xbs9jDbUWtgz7KR3sX5s9v4i",
  "key21": "4EX1uoSMK8P18RYdW9AgSqGCBJVRif3bYayeRMBdS3qA9hishRbTf3yV2nsee9LPpNETLC1kRXz7QpCifLNvunwf",
  "key22": "4Txc14tswVRkoyybVs5LsmtsAFAnciSUHKtrnkdxXcLHqQLrRucj9rqQaLXRqsvBXNWJua39DsPbqsFvyChc1avf",
  "key23": "3Mebm6ek47xZV7MZw343LnXqUD3AHPRqStdgGYpKKKAeHzDrejaQZDc7P7odvfAU1gC5UhRkw8qk7XDvU1KeTEYJ",
  "key24": "5vPsaUpcRt5p7S9mtX5WNY2GRqAGfLYg2znEJo6CsTkWLQEbXijChcQ4x6RWbGzxSPTnSnHdKeqaXMhkWnX6RJY4",
  "key25": "4kUgfMt5GQZTXbmp8UM8eKxMPjZ5X1CJ3Ao5tyT7CY36guTsYKNaakZAtQkG2xfsH2X6QvLN2cMfbb6EULdDnSAE",
  "key26": "2ZcRjywXiT1MTKLBYSEAmbsTEsW2JBS7TkjaLwwarUXvpVCYY3aqLeiRBCCkMVYSwa9GJV3X2AVwDG7HWG7hgiMB",
  "key27": "4iZ7NinaYo4RVphPdeEu1e5DVP76mKbjJHS2Q4jghuPnoH8SRxQYKZWiARzQaSeUyPaopCDQ7ocnYs5YWoqZJVXZ",
  "key28": "5ExfhauvfzPDnUbNMYLFis5GkkK1we59crhBDSHX1Cw8fu1GAjjsDuK2qNTtp61ezeNeQ5wP3GddPPJEUhhCDWoM",
  "key29": "ZKS9fW8d2zLe8QRpDYyWqmfWxjFRS4BUxhDBSba8QU8vkBcGmcdjJdudvcj3SK9XcDwTjaNHpoksFxbjix4kNYM",
  "key30": "5cgzNRuFQ6SGG6AfoW4Sqpn9FNFN3DTJVun96FRgcfSdXmF3uHKY5YAGm95CDXYhGyTmHVTBty7nJCuHKcPXWJTk",
  "key31": "5bSoxdds92pegjz7het6tQbH6wGRP26Uf55WunU4KXybHy4zgbWQaEVxmcvVfArezr9PGeqc9tMSW3369XHBHWQR",
  "key32": "275GdqBZRndUv1thTLLyVbSXgqcA27XjbKRc87Gw7ymNVitaCcporowF23gVFYDBXELD66YcXfETybZFz3whx8S3",
  "key33": "vFEti7Z59hxvVsZ9eh1SgsxEfbugZVrLruRbqGuJ8V7cgkPrE26a2JMegPJDa2QbPfmBeKwGs3Y8wg4Pbf8R93b",
  "key34": "2ifatkirtJHDQ6rhpQL7mDJySpUYA7NkD6vHae3AQxKMsT7mCZtpWyrDXDpg4X9DzRZhnu6nfWZULbBmuUzEMCkQ",
  "key35": "cbb6GoE1aPh5GS4xQPaSkFrh3feGG21U5K5zkHjy3Z4scAaCcBciyiXf7DJTaC8tr11s8S7UyGnvkctiJqRHd7T",
  "key36": "3Y16494M6wgVBTRFFGxU4ik4wf3vzGAxG8X3eVY2u8ZFgzvYUSQ7n2KrPwhrzwXnB4Mod9Xo8pvDNmgbE4p49PXs"
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
