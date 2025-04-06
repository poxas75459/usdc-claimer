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
    "3aFx1Lx2acBJyfosQ8TEJALmnaC4D9RrViXQVtJpSUk2f85GTfgcHvWq6z7MiocQkM9XAo8h7ctbFMPCVorZp9vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oaUqfuemh9bxdmKGDQFWunZdGxu5MBTkj4vrT94ZrU1rDuvWRBgYSYcuoTn1EWFKc7F8Bg8knwmMVUSApSv5JCs",
  "key1": "5xnJVpNuYhKxEWSdd75VHzWkz96YHFFn2kA1eVmwXzLpZqSmufFSzwqJqkTYSGw5VyncZq1jS6J4kgbLnBR3baed",
  "key2": "2aQi5wfbxFa7kqNLoqVpuT1Z4ho2c2Bbq8Nk4zH2nWYhtYWRUqUp12JwS3sD55WN3V6MC2n9nW2FJ4cSusp1mmJP",
  "key3": "2MGra26bPAsn9CETWpvn7HAEWPsfB1DV7oeBRrXcNG9kyYWgbNYZSkX4FoKZ8ndCifAJiLoMyePJRGBLLpLTVPUt",
  "key4": "HcQecKuzgJpzdYZpXTTy9MDsrUk8RQ325Jetj9wyxVGhyuAEK8GENhfjUZcTRF6CSGoQcFDx8ZdmDg2EweVfo8a",
  "key5": "2cwSvVputmHcpSyXGSHCf8VnU5WqiiqvZnAmABRBSA92G6yH6NK9ZTbcBc5x1jypKM1ZqGvmhpBaEMd7ftvxHA6C",
  "key6": "kwZQuyrPeKQXZ6Awmi5Xq6avjkVRp4sCzfCXCu8WSPGZNxXPp3Pi9XdSez1Dj7RuskACF2qFAXgzBiomKyyYs5D",
  "key7": "iNn6ngDZUwmmzNhJpuSvziPHSDYoyXSSo7Ava62FBi8T8apzMsyiBJ2U4Ftyi52KzXiaVukeQhZmfXJNnB6cKLh",
  "key8": "YHJJtBor25g2LP7DWdJtxfxVGdqv8z8ZPvpG7m8NxCCnGAmyACgmDRmApHnJLcDYsUFEAewR8iZw1kRyS8G3GU1",
  "key9": "Gp2chMfNo4EQ2K3CyCD9bbdYpA8FhtbQqXUj8ziaggwFvjCjJwzmFysB7EQKn9CRtrKkmo25iDB2rcPcWZkKn9Q",
  "key10": "5QQfaSPSXMssWqm85mtVhVdXgrRf28GA8PViUQa5DfysyUCYocQ1TRRujZaqnyVAuNMrM1A6SDtbTQuETxbZq6Ev",
  "key11": "4vy2Bg3u7rbBgdqfZjSNM1iSrb1pc314CG2me8H1pCBwqvq5KsfgaFGJ8ujp25w1koD5wDbK6znAPtMso932u8pb",
  "key12": "5GhBHSREJAb8rqDZV1f8x3McoUahRgoEzWeaFCPtBfaaQsxU7CitxL1cBANa9KWDMdsagaHcD1xsJjJcXng1XFxN",
  "key13": "ctmvARPMvdJVYMANxJj4sAA3fmg91MoWQzbSdnYm1t4UybS6a5o2Be1GGPXmpmFKkZgxpEShtrdGELaMZR5BRaY",
  "key14": "4vojaPJaTkSrgqWTaZhjQquxaRkFJpLg9t7ogH7SNu9UfZ95tGJL3Tb7J35yK9d4ftpWkR7BsXwJvqbL1BNCuHnM",
  "key15": "5Ef1HrEjJ5MYfYxxnHB3xiwatfrbzKgvaExrB4gaz2HUW7gMFtn1Y8jdvFvijDR2DZAsDhctagPcnRpYTNi8ddtj",
  "key16": "BTPp9cu6KrMhgsJBNzqSDo1KfaTPuePzB7H2g8W1LFLcQQhYdjfT3G8VasBVvKvgWV61FzEH64QUGZryZ7HWT95",
  "key17": "4tbidF5RPRYAvUUyDwEHiFoLR9PFTBqNajkpuEGuCVNyBco54KEKGHu4HmNWLzxcwMMDBSPmM5TM8sAJMzpEGt8o",
  "key18": "3rBYoKNE5kAL6j9GPnT5DNu1D2QvEJmKzktTxNUNnxsN4gY1SyMt57fCyQR5wUV2dq9PQPYqVrG4vaP5ZXfi6KuT",
  "key19": "3qJxCSmNmVPpJDE7NihCCZqHsnZR5fFvQnmnWDTtnL8QgLAkq1FfUjS2AD2TrLgrCBVmFbUu4tkxknbx1pMtG5ay",
  "key20": "4U3aD8rYA4oLTJgsvYVfrYgJFdWAoihd34azQZcNWSSQBDfg3WfiwAEoDhRzzkHBV6me1W8xjpEaP74GVYR8dmNN",
  "key21": "5nMRHeyqcoriwtePgPkU5BTnLac1cLCYtkCD9h7Vj2xZCHLRFcgjon4hM3wiLZncVyYge38MGJdVEHSswJpvPMMs",
  "key22": "3rgv6knGKouRPnCZr9SqjZM29Cows76YsmbQSiZTvGBva4vxTi64gd1fbSh7uWtwzW4PcoNJrx6fsdDRpPhEGCJo",
  "key23": "3Pbd6fd163HiNgwfYwhByUKK5NHEmbnyNeQpwn5txdTGugFxkyzJMtSFFvA1Krahm9usWFw9bF3WGBWbfHvMbUe6",
  "key24": "2xgqLaL4eQ5pro2TrinRv9FcEViW5Fx1a4VEF7N8vFZd434AcXCUft9QL7Y3yZRxiTot7pcS5LEH93etHBBBZqKN",
  "key25": "2ct79RTF9u61a8cWSiDEcHFEx8yJgu5RdcZTnU7WGERfs3gwGqwioLWL34A57m763LyaaFfyywk4SYp8DV5tZ8cd",
  "key26": "2EM7WtdJA4fdE1SbgHmFHCdBmunh44JGa4vhT5FtKPHv5MFQa81ReFEgZAfvfZbz6Mh8zPLiAkc24ymf5v8Aedpg",
  "key27": "nGQna4ci6R8iVotjBfnqyAytMZwuSCaRo1o347bxuk7AHXssETnkKaoDSazj2RZh1DgajVyKaiVcEAvHYifqCie",
  "key28": "5gigw1FhLCcWp5LtzKV5adj7khF7MGCfxpGEs3FpwRVq2FaFhzu8pDzgyKqBz4mxxDkseJ9iGDSmeDynV2Z2ZyJY",
  "key29": "GqnnBBjsDGTdzXu6aoNnDEssc8vdSFQEN9vvBM92prA2nsjU8gs61DvUcWasoDsMmUXFJqiZnzex5VPKE4wcDKT",
  "key30": "m7zjN2gFyLM36Q8Cg2np2be55MASqKe96tSD9QHhFy8eFm73x81Nf3vFYi79tTWc8c2eADZHS9r3MFPW6M1p29c",
  "key31": "5KRLpS74yg4mS9HkFq4Ep7gJLynX3KT3vJLRYvjMFecL3cgBwLTmRhZhAUEKxNmCRUiWJBoACzFKBeEmJSc4pepH",
  "key32": "5Uj7N5w12bbdyBXuszDbaQcfHb5QRKbnrvSFvUe6CEKvcNGGJhubamPbYjsSZfKPwvkSxApKDgs5MQMAAU4V9ATV",
  "key33": "57xkCS4Q6wX6gWCfVJ4ymcU3QW3M3cj5R3oamV1V7igLRXYVAmHNuqWbfNBMTu4C6TbPUHDq8gMeD9EvQkCkm7kw",
  "key34": "4uUTvQRDaB3PhCTei6oYoAZyhN1Nsg6bBGn9GX18wXgW2t8zfznDYKb3tSw9weFgic86JSrpenEArYsTc9NFQyBn",
  "key35": "Lx1Lu4h99wQXqKhJebP7XzvuUVgUKgpuRmj81Hgx7PaiZvSGBDRAARAVk8qzF9hTTFK74YkGMVNnam99DLd6bKF",
  "key36": "4deH7Ln4xr4JTbvfaxhMAcEsxtWrt3tvcaAaz8MNvbafLp35Co16d38BpubFySgExivG8f2tk9bgoDXfQ18ZxqCA",
  "key37": "38cijSqWf9VGvZCSUcqJPzsPncC86os5ESBDJ1q7TkDNhJnWyRcsmbWwoZGSFCNmDfYZ5WAbQAYrFqKS3MKGabw4",
  "key38": "3vxGUcQRekkwQLddjYKuprmJVeqVmQtgU25i6Sf7VTQq4KJ9dZFn6GgiDXkTq86GwhhBWf8pQnf5k1mzYq8wXgjB",
  "key39": "3ik82aCUvkYshActVJMAp864godEfvAwBpkfGS31EhWNtYCVx465BoRrxZ5Lr5yPv2CqgTdBfExMw6KaHC1kJvT4",
  "key40": "5V1WyFPDayK1RUSFjDkCLPFqzaZGTWVcfY4A4rbkfQkaVwM97U28qsUabZKiySD9RXMMeruvRXjSGzVEgKVp5XXt",
  "key41": "4Bb44BgdH8ixHAgoJE2vQJnN9KEwzJxrLh7iT9q7XBNCXvhAGC1fwh7DgvXsjbdHq4y3UbdaDVsPQ2UxTPCWpF56",
  "key42": "3wjSossLjSfEn3NqNxbqhjz9eHY8BxdjZFUVbQ4svVWNZjRmWJ7MdwUZEXmTowj2veRiN9VzpmTwh8AicYXwjpGw",
  "key43": "2Gw9R3LFXk9Q8QeeiPYUeR1ZEBsqCN2US4aVJqR8rJ7UNZYE6CWCSi2ozbeCqHBdqvjZf3LKHmuDgVFqYky1YkXK",
  "key44": "3TVUnkCpRosU4Nf6FYSzmYSD7LRghTS1DRywgX3nYjABXvRYNak2KGBQAfxXhdj8e5HBWK4gs7jZjct3sqha5b9W",
  "key45": "64oKK5aHN7W3LuC4A5ib7HxsSFCT8jiEe24rCLAfNwmq2scXdCGy1N9NtktkYge2u3H5CJVb9CGbqJ8uJTnaCTik",
  "key46": "3LcEVLEMvM1YANHKA3YuT86W4rDQGfbKowCbwNCcGPkeTWUuqedCYGmydu1kpaKZzbxA4hTKm7dkzVLkHYyZFWLJ",
  "key47": "5G9kwdkbP7bnSsdmnqSaGTySw7p6nzDfCJYNQEZa5fSHwenSPd8i88ZfKPXvDSJNF8y3gP9XLLu1dYaKFiQH3r5R",
  "key48": "4c9kjaPn3GmKWtHwSjLERsXapBVYUDauz5wKQDnxGeLW5HKfY2xQQ6SzuDNaJPTTKa71uTG9vGiwRsMd6AzABb4S",
  "key49": "4A8kndfipJCiPEGtwUQJ5FYnfym7Av7ankyLcTZ6LYKrmm2G2xJUYNDtxPVrQtQ6qC432yUkevfjPz4MztmACJNB"
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
