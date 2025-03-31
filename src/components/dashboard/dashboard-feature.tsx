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
    "aK4bkNbPxG237std1wQpDHRhZ3N3DBngN57ELNGAYEapoSJCFacWW7ZarGRsWxV5DgeuVwkFJj2Q83GobXaWHd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7pLu7PmQ197FhxrwX7rmXSDB1i4Md1kBwN74NQS7EGTvumyL52B8abPWv9qJpeMxTWS2mDgG2x42jxQYc1pxjs3",
  "key1": "5cV5wjaLh5aqFrGCftCApReE6TCv6rU9UMpqftfKPsCRc9bGhbPNgjLQakRQ3jhmqanVuuzeEcoQkfhgRMdqaThD",
  "key2": "61CjdwG6JMnG6YibwvZn5Gf6TmRuH2yc3KtgUhQMtBgHsnq74dAzuTCsrgDf3CmyJhYGh3kxCzEdr7671k3bdAiv",
  "key3": "4yX3HFpSquJZwGYyQivzBJTioFLSdivS8g5bCT2acWZE6jaVnGtvM8ep3it6FfTMJQmUmp6J592oPUCoRaVaM1wh",
  "key4": "km2TegHvcHMrrbxqYnna17HN9gk7CGfGfSwo4ZmCUBj7Xpmn1e8ucLAtymFPMgWYK9RPn5CjUSSoeJVZKnwXcdx",
  "key5": "5eUEv8YXGNjHKHE5nBDMMp1AYBx8z1TwRG9uYoHWVHNs27RazdgzaTMFQAuSuHYA9yTNuNQkGFgUX29RFQiojP1m",
  "key6": "4oY1BTTsjn82TnphbJjbfziVQARwjN5r4kWdmasvbct1ggenWFjkKNZxCii5C716SAkxBjHRCDJZ1VC1BRjBJ1id",
  "key7": "4rmnaQ6J2P4sG6zizNNPZpFSWKUzoLPUU4rdPbHGswZAwJt77mPmHi2o7ezw4CLyiHv7a1nG6D4k6BRnNwmGG43f",
  "key8": "3iwUysokYaadX4Bf5qa22ePtDgfQBhx9bLDm5D3uEKvi52fHrwJwHDgXwa2u8GYh5wDr4T34etRDN4qKfD3oRUUz",
  "key9": "4S2HiBgx8csqqxoTU36qfCkPbK8gRzoxbxTqqZNtDwygbgdVNZGSbfasg1BizzPfYRghsrFSNFFos8nStkEDqAP6",
  "key10": "fMofExXAfLt21dvsoHB1RP179UUtmA7VeqF9WWpeAHHomwXqXZbiDUhihQYVetbmN4V4MQwnwr6JkCWAL1SbpzP",
  "key11": "4V83nxYKWLEtcGKwHfRdvM77o49qEkXhjmRPczpSTB7mSU3pwRMogUkms1ygUakGYQug9GK8nyzW3pdcXcuwaUri",
  "key12": "4EtBDW8TqNHfvnnygjgcYDTdhQBdCY7cna3GVu63HzEpYxjQhjAvLZngezpFxBiEYAwd2ZmebocR9Lq8UqEMkzaJ",
  "key13": "42VAcSDhgeHFmabtwqqeTqnsQFfP4ErXqyZmsNmFyBQpJmQrnNDbiHCPcNfW2RnW1d3XgpwzdzaTnXvWbWdina2Q",
  "key14": "oHjj5PGnvjAhG9Pi3orYmyHKXKzvGQinQGukofai4UyVS7kXE7jpKqn1YtezNCpxu7JD3abLPgPqwzBeD5kYALN",
  "key15": "4T2xaM42hC1WHw1H4J362dtRD63LDpheGVTPLWAiXkLmPoXfa8kca5W4K8yTq3exoxaKay1VYgCZ1QWKzus8fDfa",
  "key16": "3A4UgTCQaLZDZXjM3QFkbJc6dfFqGDRFPbPSPWKAwHnuq7za6bCuaxbZK5TezpPHcNG36DvAdfs71cgEJuJfj5cC",
  "key17": "295WuscYpUBuRq7PBpqhm2TRe7WYXUjT5nZX9qvG2fL8c9htxbjGjPJFoDw81zzxT8x7UkEMUhDCygxNQmv6ofAQ",
  "key18": "5BwaPzXkkHx6ndUHRMfc39rjib7Rv3oz8P8cuWdGxS8MZbV4FHatKUjc55rvmsHBhimmsLFVHfRNt4SQ3Nm5BFKU",
  "key19": "5njLNzLWqnz2Rke7ANo1K2Xeu7jugiMR9xPEpywpWcoui5wXWMbe17yDUkN7LCduZmHSSiYbXAJQBte1J2wv6TYG",
  "key20": "2FWV4sc6Js6RStkWc3rxBLnkMtxyMA5z53KEGYCgXF9av8HGxAr9T6Yv72ik2bMpktrbdRuFyy6eSMEWJbwydQBN",
  "key21": "5fhgkvnyrv3UACsYcL9zn8daMcFzTdateZeXpeRodDo6Y3HZWyWxh36mpWk68bDt6Ay7V1Hc9f851oaBX1u4TLPt",
  "key22": "43bEwRXrxjkEVENaXzadnqJMUa4wgArEen6ixmKZBm9ZbmVTSwC2oXearJDCfpaiLGHjPJxPDBJyHEEeBkqyTVky",
  "key23": "622ZJJJBLdzq6KG6PRr18Mx2koApXjSVYMgPt2MxBrd6rHSiMLkkFS6nY6bivF8xvS4QaCLjwHiJmvMTrJgrD8xZ",
  "key24": "3K2nxjdXHeBmDJcBSgpEQMw1SRVi94D62aJPLMhtDfrC6gGGSF94e6JscyjyiXg2kkKQVf5KFiBsTibZActWneKp",
  "key25": "2a99FJVxpMooNK3TGn82tnX5Krz3ZS7jNoHUoqCNP47zHUYCdb3pkfoEM5acPh7XeWNHuUMXdZaz8XUnVpyXxHvq",
  "key26": "4z4AqANaUeYr66ia3Fjqhtin9TmNs96RoBtFVmt7RUGK7kp6gD932cdcomh5p4VtrAhtamG9VfqMWv84xkUviT6G",
  "key27": "4XEvV87E2azWX1LryWDbGTLb8JLbzbaC1sgXRYncbiawWFkcv419taxPsXxawMUVD7dgQRHyJH6xjHdqvbVzUe5k",
  "key28": "4E6KE7FnZCxj5Rvw5W32o5mf5j3i2x31J8codDVwBE8JLbhmPQqDukUdUofUhUacqZ2n4uw6SBFmJyT9mAr3NwgV",
  "key29": "35RR7FRejxEFWhnGgokVeoRwPWXWVVRWBp9Jf5tzXrsix2Fda2VPZdBXanFp4o87RGJSdd7gGScDGQCkSXq1Gmaw",
  "key30": "i2K6Rr6p35GM3VZLVhak2geyj4phzTv5XFX61gtf2otJt3pL8duE9ZJsruD5WucxXhUR5Nq9VGZRfRhPLcau4kz",
  "key31": "4cgSss6K29kmTqpTNqDhGUozsqrh8vuMpHM5y3pTG8cHvfuwo6nNogW4McCfftgjUvTSXs12uqq4Aw5TC9fjnHpE",
  "key32": "2BBac3AcxbGubDkJEDo5FFYjArU3AFytox36XnJ8qsNso11TENXXTfNthMamSrCfhJkeMTFiQV4g1nFbMPcm7GfT",
  "key33": "2nJ9eyDuU3jxfsgx9djQiBJVX3cq1EbVCK34VZXiVMBiJhxSwyi7a6E7SxwUx1AjW8L9qxUmgEsTkquJTxnL4JDb",
  "key34": "5iB2GndYqG1WEB7o8EsC3MjwPGujmuKikvqMH4hdff9atwX3DsBg6u5vHdhxJdwrg4J4UPcHrX1asSJDBRLqnorM",
  "key35": "a6PzosbZ1hENSXP9FX6igFAjGZEVJqbdrkwQ2iPx4okUf9dxcAuAvYFZg2GHUYwQ6yy9udV4W4nx4cGAnCoTzvV",
  "key36": "4jbcacjkbBGHJTj1YQj6jGZtJ6UzyPTu6db5qciwFQKEFL9CMb8Ey9is96Y1dUiJzvUySMBPiW1gKjHUdY6bNtyC",
  "key37": "4gFJ8u4fjhLRvhyMBmwam11LGLe7PVufNi2QWmyv3GbMsyqCKHxuUxrHkgnksr48M45kk74jTsdwEpCGMz5QfHEE",
  "key38": "gvTwSXN8rDFtBX2829xzAAkCDTHapsB128PaGYv9fcPHYw1gRxeNJ1ogSnn1gPDm2hakzkEtGEy7uNptrqfEFS3",
  "key39": "2tXmmAEiBvAD6WrxxNuYnhJeSP5AWkJ7uKzDJ3xULSED8qnUhbrqXNuWxpBTd8axQGCPLK7jNBHwtQyMfu8eD5gV",
  "key40": "4CNHCKvVifDBZEkqKsehrLpQfFE642aBBGq8ipw6D7jY8ZrjeesGP8dBrwuh7UVb8bUYsYcWBgzAjdtgydiYE3Kd",
  "key41": "3MvrE3AbDTh6BaVA1wtMVeSGVLBL8uw1BW2usNnwFtAztUMWbmyrwXJQV56JhEU7GW8o6vzMvHF9Z5n1Ntkj5Wuy",
  "key42": "jWfbjXrRCRG821uPnDG5GXpmdEwUtk9QoYotqTzXSAJdHrPZDQpEpTUVSg9UgR5gwrXWRie9tX1qS31QX79ABee",
  "key43": "uUKSmWGhMBCrXZeDWANUitdZnHEpGKt4ESW7zpNDiiEJ4RgpHsKjYFPtqZyLztmvVHg2NzSXDrvSomR71dV6Sfy",
  "key44": "5bAo52Neq88CaxB7fwENMdqdMxa2KXbk1kP2X1sqoqWJCSqzpxFH2Zy6E4vDKd798u6Dv493dHbAGsBrttQN4KcJ",
  "key45": "3gSvc1aScwGJpV7yCwSG7HHdpPRaaszR32qgBMrebZnD9xcUDUvqsaZzeqeUzusxbEe3vVdwihTMGmabUDBxRk6n",
  "key46": "4ZPtAupADtmd9HD9BELJNXoJTCETkXicVZcFh7AnaQmG7wZQ2FbULsmp491p8JQvfJP5oepDByc2TW1QqqDTC9c2"
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
