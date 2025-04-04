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
    "2s1xWBJhyzSZFTxqvm3fWKFMXrWdNEDRYumeLArq3Cs2PiV2a2egPGfjrvwpaP8MjsafgNNsu6c6WtW5yPBj3JYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFAabQemrwudotwE5pRf2xbL1rvVWUJJVPxLfCw3NpNcaNTbjpA2g24azAAnok9xWjFRhQw7cwuXBfXToNAaUUe",
  "key1": "4GNpjVRGsE9n6QtqWeq6T4TKgFfk9tRDwvAn1kaL8x3VppazzUoFNLVzYxqNDatY4qmszvhxoyFcQ8gZkMK4QhcK",
  "key2": "3S8tvBZ929j79TsYtimi1Yvr85w4HiVRuKgXHk6Vzq38vns38UuQuFBLESwEXxg15r6jc9bfFmgYfu1XobPQ5TZ",
  "key3": "5rzp7T6mBzP1EjfcjA57Kq4iyxmzLXn5Mk47927R1j9ug5bQs4gxhkKqkERTACCVHidxts7NPHmYXTtVg5Ctn5Vp",
  "key4": "5MiH334eqmy4SrCgiYnCBKL8eqqLmPGtkZv77BzCkgmFx6TKkPovhcpHeHPBbdfyM3hnMZG5cCh6sndsBM99D57Z",
  "key5": "4FknPsf6SuAJRybACy3hkgo8GxmW9AFgojVz4kxVdBXYXpzU3yUPVaXPoo3E5jracCdHrWPE2rLRGrrW1Gz9odYh",
  "key6": "37R32HQqfiSUsFeCFEacsUFqmFojknWYf1JHwKT7PV4Ro9hWEi9KrtEpRACiLCySZsd3f9K4CbsPMKeyxeMBdcmo",
  "key7": "633gXMbJkKD3NZSXFHFSzSasXPrrYSdcU4o6w7kV4TvBDcQy9VaHCxD8xXq1L28aK7fLdk64ZxB8hk6MWau2dkED",
  "key8": "44fj85pQV8X76xFLbufFrcoLgfTSZA3cLFsKnzA5TsBRPXai2ky9kqWvKoGUkRAFvKsHYpkzLLcmPqtFBkbYamjC",
  "key9": "Mzx4WiyLqw19JXo7KzCSUEyZcLxmznMbJjnUxQdw6U6DuvnxUhgwETist7E9Kr5szZT8bCejcmofE7T1YpJ3e7C",
  "key10": "3BAgvVmv6p3cVaAwZH7h4abKdepc9DxLAGidThphHSKuS514VTHKmvyiHhEe4J4CSLhXm7Dm4XkewPWnEhxniErw",
  "key11": "2gHVVyMnK472TXCecb82rk7rT6uacSAit8po1HufcsDxpQdeSZxY5hjJm3q5zV45ByRAvu3Ehq6KAVgq6Pyr9wk",
  "key12": "5dg2v6L1xgqqvNUyfyVkGnPkp1dKK9iKkSJa5fRUai33tkTcu3EZVUxtDGLxQ9p51q3U6a5B14jbNNxjqrRPt8A4",
  "key13": "5Voatk6uBZz1S9EzBrzsJy37TFaPz7SZPQDp3DPNdLRQT7WPK7oXgTKEevJVUij6zpXGsqJBJVXdnxKzzsVx17aB",
  "key14": "2TwjTSpc7up4mPZnnwEgBgkPTkHwN6X2VWCfDSBnH8Xoje7ttwAUs783nDfsiXBTxMhzvB3sp57vdYHE83YEpZ8E",
  "key15": "2uU6onweydmr4XhL19ksf7JiuBX5MtGbsYioVfTSt4q6C3WV8Mnwd5gJATSBBwqdy8Ng5vdExsxWEYLA1KKruywh",
  "key16": "3gn69F7YQv1Hsfi3bcVcQuf5TG2RfiEzg1HV9FNxJvRxc5VbPygmry4LqGap93dABJBhLw7MToGd5D3UUNHyLUCA",
  "key17": "4gWVGyaskLPPLwVT79potVeVueTUbk3D1QhJn1qtvRogT2fRvLfxB1GjPnPXaXL7Qw4emSmpnpH8mpwda2PMEb7V",
  "key18": "22NAqnQ7KrFBbjDgyhpw6ydUhHhzAU7SWQhCn1Gu4u3UHQTi164sEK8PTWSnLhWtzgDQW2sDY3wgyEnWF7ZQMAbi",
  "key19": "5osBzKnR9i3dfqTes9NbzNknkm77GtJyzXT1S1UkiHxdsL5WrwXwz8JB4pxhvtFiUrQz95iLC1HTAqTZ4DV2RHQQ",
  "key20": "53ZK9iDJWssqWq7csf63wxfLAPgNBTWkFHbAMUztfPMJpu4JbacWeTRyAkWnHvFwV2zNPcJ3dxex2RHG4BTtEW9c",
  "key21": "5dpUhmJg5Zd8GWb1KutY8GXdreNbVjPrzG4bmxBQ9Nwsy4C3RmAHmfNCtb7uDuQEpbcaHfLkH3Szjy2p5UWnfxUW",
  "key22": "2NZMARHEdcTS5Q5mwn1pvUxDfvBXwM9PDtTTZzcopoXERznXXusnhda6fEAC9HARybW2bTi2mHNH6jSXoR6jYC51",
  "key23": "25Y2S8StabsnPMmYPn1HXiVJBnxEjRjcU9b2dTNzLYC8FfRnM5PE6q4RyiJu9crcBDRaLBzxAsUthuvB8XwkqkfD",
  "key24": "3C6smoP1zVLoVDz8pmFvTutf9Pxx9kA8wpcpGVBdvY9mcskqa2XnDLnVAeWD2m2hB6LsWu8Adx9MqQMRoJa4fstQ",
  "key25": "2RpAVPKHZSwmRBoP1K1mPVy4v4zSEQWEezM2Y2rLLBpdrQxfX29vhXgg8UtXtPqBBRUivKDkrVQfSoRkLisHqYqq",
  "key26": "5qkgnhGnEoMEpkFNCMKjDZ4iSav83NH6VTu4x1pFVdqGY8JUJHzxXzqKpA2L8fN4nz4SfE54KjBse1gNSXEUXxDk",
  "key27": "4vBZWoAJUP6ny7rm9NPXJrc3fTSukQeftxA5wefMYDrEE3r7zygiA15D1C8SDefn6zcZgDtczHGyUJbPCHidnSZg",
  "key28": "3qDUcGuiTPjvz7UdcbGyQ9wJ1auCP4CDYteyKG5oBA5aNWLaiCo76xaNEkxSnqZfmaSG6YJYBRDd8MPAEuxSZn95",
  "key29": "SKnDqeGfZVQeBUg5EzeXJ7iFoTNWWa1johPCuWiYWMi3t76689NGgFY9HGv8UnuBEgreJAcRejqLQpUeJHzBc4G",
  "key30": "3QCoCmuSreJ8eYNSbVPwa9TR16YuiMGzMTscXPdAthDiBZFHxQPvUz8R5LTt11FQVzj3AqU5uND6kNWzTvbahJPS",
  "key31": "5GiMgRprqTKKWDJ4buRNmzP5So7zYkpnfyCYRJdnqnWARsNUJCfApLmMcxu7d8k8TYHbLFUvfqbrkvu1g4sTdGvR",
  "key32": "63dgEgBaamAY92i9Z9Z8wqwW7uZYu4Tp6r4fxvQuC4s8ipU7BcFnkhcJiBcxCqo8su8F8ju5yY2kRq6mZPrVMsdd",
  "key33": "4RDN41qH4eX93snPTtijsXvi95mJQuAToVqAfVPou9khziKWGbEScrwjcZ1PXMc37wahWUd6MSVodeHVN3C6Pdwx",
  "key34": "5VSEy3GPbTxjGqbtWwm9scF4E8SYvZT1RTGG3x2PkLVpbvPQ4hGjrm8ZYNXKbaTri7K8mrYMr2kXejdHF59RmFg8",
  "key35": "61GAfRS8ThfhTQmLkvuHJxiXGhThTzX6WtcA6LJsgYLAnrZuvRypmrP7B471aq5jUBGpauWnxiiiP4TQoaQ4uu7H",
  "key36": "5nTvH7aqFP91BjgURNyBKaT6eRnPj9oPPFV6aKmSask9i69YFjEVZzHo6rd187xNeAcyPhVrUo4fRSJ2eTKPV9RY",
  "key37": "4rrkFvSr45ar9FPwxRZuQo3Rz1rGrwGCrGNTgLvZqD2X77T8RG6M45PWv3EJ6AfsPT71JJc1jXLwXgKrb6B68LCU",
  "key38": "3hyHAzJjDcYuuWRDcorud1Bmcvi7k8khXBSEDWwyWUxz2MJmxQd92bVCFebGK7RZ3fDgLWsRkoDyK1xNaEApNqC4",
  "key39": "9gdf33EZf22Tkie2cRTJc2qyGAQzZ9vWjN4xuVqBjk2wK7XAqpiFCoVn7mqSTMxn8oXgDtTmRuPRr1eC8uCeMBp",
  "key40": "n4TwHe8yFDysAsM6fzSnccQjZrvxiy8Erk6KtYBC9iR1Q79qogaMUxEq6GSvvfeorHuRcHMxrYGPaq62J7pzdHN",
  "key41": "4MsbMaJ95MKuXKPV6HS6zKrV6JWhQPQfXAoyQEMDPbkcYqXQXqDCVFFGc6hVXb2JUMeXSPGYWmg7TFE7BxkXC13c",
  "key42": "tP39QXHovppDUDf5oZ5ARFzBwhdvXEEYQeM1GinKnYWPLMryQtvYLcPAA6BH8Behig4Kn3P4shxwXE8CN9ZE2VT"
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
