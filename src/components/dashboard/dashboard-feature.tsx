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
    "2KFzkqL65kzUAhZZQj8wvUX4rA4csMETUjrrjDDMsx8aPPxHxovCsiZze6eLEdF9RzM1senkr63TejrbGMs4cLSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVQYfuqEa4CYYWU14n9u6Ghrk2YenTKoFyVAqX7pCS1FK35tXnfbSJ5moTDF82efQBXxTjtR8PEhCkLKtqHriaS",
  "key1": "fpUgnkwUomftB2XD8733bBu4e3DexHRtm97B4vuhYQ5qCAecfSMjs66h5ube1eefUR8ihCMDsSygugDHz8wi7eh",
  "key2": "5BVpWcQ2dqxPGEAUQ15ndSjhn9GBFdgiv6XsNzefP3Jbnp6cu8gae1aTHHKbkrRcNEp3fRtT3DbnkC54VAeTkZLn",
  "key3": "5e64Y11ckwpBa9uTkCf4GFMo4tzTAjSkbZq5rH78DgZ2U2DvgigZK2gs2NyYsneKDMvfk4rHMqjgRD9vSdvJonZ4",
  "key4": "56YkZSP4HeKGmWjfZ8bDWCEGDjtyH288wK4ubfAsVomGR8THkmjVbCqHbTFeN6f6mhX6sbDvqzLPmsqq5yWkr1H4",
  "key5": "3qMQQEYSHkDc62Ax4tyX4GS9133mGwKg8WFgDvFX13Vm8v9pxchk4BcBgFmN7VZNrehXoppc3QwuDha5rpsreU5",
  "key6": "4r6cgWTb2UwWMkJdK22fWxUEhyfgPtSgEUdUiXjCho2qpMK65A2enhYgzrZEVhVieuSdgnQ1q9kNjKG3kYQzFjsq",
  "key7": "3V7WmcJr7g2JAcqqNWuTUFpiiZ1vb1BjZw2aVDv3pamqKfJ7yRgZ5QDEzspobViNmKB13d2faBHzQADyMgoDsQfB",
  "key8": "5Jv4s2wbzkwuGB6kCw5MixA4jUAzS3c3LtCciorc9iUK7GZHYB239cSfK19n9X3pAmqqNkDsabytYBMahAQ4sUE8",
  "key9": "5HTjHujY16dk4K8ftuKL9MuhtbYk9KWzfPP6gxxJTWuCUAsZsfiSPqPRDaUrHgdfgWMpmiMNXafsM2WZHAQATz7k",
  "key10": "2KfSTzPvXygbQYna3AW7snbq1g3KvJgmZJHrRevsbkPe1sRmJrPU5fTLqJ73CFFznpgn2u9KRWv4a9WSJAGj1j2Q",
  "key11": "xx2tRbmMkTrRdz8r2uVxZ7t7KsHGWSxJG4qJgUFnxhLEqDodVtmmHepTxKFvXqJ1eYJcBhotNapJK4rGNah8Ctr",
  "key12": "3tWzsetJ3DdUbGW7U4Pv29umcp1bsZL6ykr3jV6w22Jvw7JGZkqMPFoyqwHZAY3kf5KHourRbVxZVTTpQWdN38jC",
  "key13": "3AuJXgvxWN9MvdRv1MjZwaZucLkxvfh5Z1euDyZzvCxrAEQSL6Ko2vu7pSjfcLJY8M6Mr2HQQK2vbcFvuXQJqAg5",
  "key14": "4Ss1yhWGV4q6zL9z26bSMquHAW6uNpyKeKDu9iDBj2HjpcwzogoJ9saLAfeushXHDNE9LeJv3FZkqfiwFwqMLmzk",
  "key15": "5aoe4nPfHzwByvRqGfBhrnCfyg98GaPzWvZNC2NziDmMVZeBiYfo5RTCPqJvzxrUwasJnxKTesJTJViUUVbifGdZ",
  "key16": "52RSdCJGDEnH2F7BHGrjj8CWBWmbWtuioubjiHayRhqdehhxumrxy2NPDKuWDvsfap1SNRxSN3LSp7JJW4jEaoRN",
  "key17": "55JYGPkjMyg4JnWHj1FQPMKNdFNFVQ39TsUC79nBrGs3oLDacfS7B9Y7gom17C1VK1VXSVcE91dBaGKPHdBSyMsh",
  "key18": "4puZk4E61ez5ev6eCxAAB3EbPyu5av614bUi3Ag914zASgCkyhs9rxuUThJHbw3C6xKn7NVxZatn1e5BSPbKUEc",
  "key19": "3tz4QGHnQEceELfYGt1TxKNnhxJv4FtHZMaxGRuqeZ3n5Jh68cpP8ya9M4Tqi6XYVvW7FJq5UjUEAzsJ6tCCC14M",
  "key20": "2aujkc8CNSY3B3KXyv2MdVtH5TdWiTNkVo2GfV4DmY6NUndshJwGcvVmJgdkrMoF9S2pKRx38CEjQYTNyQtQyyiU",
  "key21": "5Zt3EJWz2UQEHX6N1sCwYDWLxYoWKXEJPfEN82XjL1a8pYeR9VgdUKEz6Tju19PZghU8SrutjG6JvUDTkmVfzXNe",
  "key22": "4RznUUquqqK9PcjJqo3ACYvBTWoBfFRicaQmrjEDda2yYLfXuQJbcAqtKa8cP2trY32YaeRjvSokdNyeKwp8ReAS",
  "key23": "3hqR6hMadKBK6fCKjRahxSxSYX1hqpZ71vT1H3JkRLwFy9LvfXSdoPRaBiufoLvPhduJtDxQTqw8Pt2t3hQ8CYu6",
  "key24": "2PjfQMQo4FLghF4rvVogGngL7Yj5KB87cenrpa7RjXQGkMHDJTB3Wybo3fqdWgZjzBRkFtXhXQLqrv6iBXWN4cBs",
  "key25": "JrdR96QqppS53zPJXDqmbsYL247s5hX56JrR6ACmAB9NzZdJB7oNiCyPDQU62iRe7DF3BKeKk8n6NxmRmpagGsU",
  "key26": "2UwXxbPsMYRataarewgMJMLZHKz3FxP5ksyaEHy6Uc3FuRpdHjoyNt3rgqZJJaAh35WHZ6METfVHMGtpvxxhmddd",
  "key27": "46K5pGBGotxULyKVXDkeFD3JTVEZB5mfduLWgqNaMR2ebw79vSZmGGrt2Lvau1Xnmxdm1r47vXT5R4Pgmviy4rVf",
  "key28": "3HC8vYbzU53GNySCoKfuGhPrYcKz7GfzT5bU7L6hyk2qz5uFEkMikyaYsFM1up85uEcBwqCyEKC93N1Rnf46JRW4",
  "key29": "GXrNMqovUDjAnZpNQqMLBp3NXLwJovwnLz25cxzVur39QEyYwH17ddyfsgRAgvRqbda6ivLGJaZsaJyUxHZ8bbq",
  "key30": "3xQcVWB5ReHH5xvHR8BJNcimYUEH5FGPT4THqXTKUWAXARztQd7wnmyVy4ZMkgJjd93awEPjsqrncYKZ9mTRbwFq",
  "key31": "3JurN5shfpX7Y38fdmb6qzjsF2uQajrFM6tCqBgDsEFA2w7zR63YsKcwpMPXDPx1f24UHf7WbiUdpqkvCcUAbmyQ",
  "key32": "2hqdqHbczYvVeVwyhV5qdEVfTQN5AyQvTDko44cghPieJqxUayjH48MzUSQvdo2SbTz7Pieb6Tzea9wSCcwcAVzh",
  "key33": "5fohZTv6zNpBdjCm9XG2cznesCGZfQ5sgRjqspDoZ3njgZbNDmKwP5PVceeanhyEpCnZkK956KTHmGkRQq1m2pDj",
  "key34": "2cDovVMTSBiYyNtBRuEX2HDwTiyA5AA7qvW3QZ7Y3MJjJwSAf6YDwqUEWnkSUauEQ6YNcdVP6vS5XPH1D4eJYjQc",
  "key35": "499doNdAmJyaCTi3iezuAA4DJHnESJAweRNpJeSaeKmgymrrVB4Jz58X3T6UDdQjrwRRXxazyaBo4BnCKA3ZdXiD",
  "key36": "4Ppzc6tP451jfCUjdt51H1zq1XfnxZyPXE7gvPtS1C9uMVAyWEjUpX8f2pXWhJXGomz5bSRmHCgTZ9Rad6nni9q6",
  "key37": "3W7TSvosSkK9oaiCrGEz8dGyZWSZM6Dnyhx7vJTtBVzfn6PmxKEHrV3cHHgrovm44A6DDSrwjqEKY7UCtzaV4GCZ",
  "key38": "5JfBdnNwBsGovBRtA7V3vnaPVXyeQuMDjU94bjyAST3hyBQSti1LNt6of58zhthgmzXdR8xtMmRUog9KBeNN1oAa",
  "key39": "3VNfLCFxELYNFk77ycTLGYrHFhLDghDScsuiBP9GQdLqyJtpZbc4aHG8p8bNTDTVro65YjYkiyidCME3zXpuRK7b",
  "key40": "4J9LPm1sZC1Xm6i2Fjgbs58AuSxDojmdVj3U6SAjjst9zPkHagfPQh9ZesF7vxzTbkPtPi2ihckNdrkzseGxFEr4",
  "key41": "2A67Dxeh4FJPzKWtPi2gKndSfxrsNFGHKkHQandioVHe3zweirT39TkmWPNdMQAuKspPWR8AoLjJymZDgiUbex63",
  "key42": "5Y2Ss9VzN6KsY76YJJs8byWPBDzqipj23qpKHgS8a4QW1X5VamM4wd326vMTV54SKxtwFWsVL5bVsJBfEM7DY2Qk",
  "key43": "3iPJFzrx8TWikJwDSn7PRbmbmkXkLjT8MPpi2jXpNZN1M2qGJjK17peqFDbKmMWWL4BCpR3PfQ543YHEtZGAKviC",
  "key44": "2hvAcZa6VQKTZdc565spwAK8pc1cVvBnuTHv2DMk14SYFMMqqCXCRCUWBprE8yBQYHBVyqjmqim3RGcPgMPz22Y6",
  "key45": "3D9h8wNLMwaPunjtCXLuxfYGRKsmbZLsVpcH2SRnFPHjrFKEST3Pr2bTSKPiQWoXC8mGmDbEJTFru86HyTf8EMeH",
  "key46": "6TRHnEVQ4hkYmFNmM4EEmBbdAMSembeCjLhDyLbCTKU24n4srhA5Z1JngPLhzpYKjytGjWTqcTofW7B8Ee2MNUc",
  "key47": "4M5GU3FMpM6ivKQDejB1TL98dVayLp33GKLQHfRoYbAzu25s9aM8JXpYrREx74SPCcpybPfsfn6kJZEM99L1ntAj"
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
