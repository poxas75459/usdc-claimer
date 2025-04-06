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
    "241fEj5xK7NPF86Bgp363N64WwCfq7GJ3jb8X8GpoaUvJ7rz3ddcTNznu2BJHqTXtGbPQmhMhxB1kNYt7VPwPFDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPVtCwk3e7QCHe7jcTUN3MaWVBjRAMYS3rNGWEsDJLfgR2XqqY5SAsLsDYofWqoeaNUX1LWb82QZvFerG5eajTe",
  "key1": "4bBzW2tZ2v6ZP9FWXmJ9MmW2HZyqnYGfngkzASzbkA7aJyURXojaaAgqUHLMhPGp1pdLLae75nkG2SPWYWSimsBA",
  "key2": "4xjUVqP33zsqrtnVpmFiSyLiEAyJyhMZaZoGKia8VH96MYfgDyY5gLHeyBfxkAYq47D9QyFicS8pjWr4RvDtTMFd",
  "key3": "5cFVY2Tovexj56RJ1V3KFJaYcA9aq2R5mcpjFZnP8RdjAxNmVGZ5WyUNmoaLoNi6BFopRZwKDcSz7CNKRQvXXZg6",
  "key4": "2c4DtjavJfHWQTebUxWVhTT73mUr27tHXBSkLVpR4Tc4qWf9sRbMZQmoEVc9LaWvJU4b3k4w5d2DomEZcqfpgsy3",
  "key5": "2CtL4CF4hrPQh58AVhvy4wHKyVnhSz1SJuaPq6HGnmN7V1E8NULuFATVrBTLWPcGfK4i9qYPsR3kQiYHdrMZVZwp",
  "key6": "fwkc8eqScL4QL1YapTGUzDPvjFvZttniNbxgpRLH1Sgq6PymLTAs8brPjHBvtYSkbJPH8kyPfSdSEQKAvYG9GJf",
  "key7": "32Atj5YfDmAo7z7KPZxUtF7FoxK68PRwyv4F9JfNaStbNEceTMaR1qpqs733WuZJoCayz7aXBps7P97QXjsyRvEe",
  "key8": "3qs9QJD3dFbnsX89Lew16KzzHSZxCKzKwb2cFwNXTpdx3qjeiShkSBL17iJQ4psUuFdaW2GxPoxfyzpL33h6JRYS",
  "key9": "2MqdddeEWwXqibUPE5Hr3HfKeDceQBV5BESTckKaZ5EZ3k9ZrRzAvgkWFAYkyBCVt8oe22cviJkcwuxSqX17pFvp",
  "key10": "5c8owuRNCuRoGfPNCwyDToXXxt2W5fDJrogLdS2JRH6qhAYvpwCLwJ8TirQnWi6d37StzViYV9xfmYfsiQWCqqve",
  "key11": "2K22Kh2m4o3kgnFEE5Bu1P4AQPsitR7saspNxRTPPyR8FL1rseeND6KVpD8UZZDbRTPbChncBRSKk5aXbcnv12LB",
  "key12": "4hHi9UZP3pARScdDR9Tqmz1co26k9RnN4wk7VErB15fx6F5BvNaa75U9ZupJgKJcLJ7mFuo56wXMb8gRizfwN78C",
  "key13": "26jLzeLyNjM7M7NLveJXW5grCJ3SkparvkkE6jeSavEsrXUZUxHpAfU23DsiUhj4JegiVg2h9b3cKLfErHhzYAMe",
  "key14": "2LvndMGhUWeSJCpEWdzFuWpqZUsuQnLnHubDNxbCBigLU3Gz76z6EwTAXajrhLTGLPaYYVkbJ2zLKXhC9T5PAPZ9",
  "key15": "4jiGyD4EEMWLdh5qPBnETwRQxpzmHp6f2sH6ieRsoj6L49CeZqBHWhGR1e9RzVi2NhdnrnyuVk1fb4oWTioDxgMe",
  "key16": "5bpqWFTSyD6zmWLbegDESYTPrEMZAujJiuc3KSa8j9epmG6aJWkewnUSoD2bBtU8LkvRPniKCYfDTr4qd9S1R5oZ",
  "key17": "JW1piGAGA745WDbb7rkhzUrTZJMGWtvypGugdwVanY6o6vHM5SzCgwZDkrbRA1fS5Nm4Phf2HwAc1dNcmMrzwzV",
  "key18": "2PB6d6q8Hck1LodtXWYScoSfbr9aRz2qmdMaC3c5sGCJ5YtAExACFejTMvkNAiu1LshzThGvhAGmguM92iwQ2EFP",
  "key19": "5r4Z8bEX8TMXUWY6y3Bd4njTn9P5kmjsNq8FbgzU7wYmJrnxfVTjnziSH3ij4Xjcy7gXTaAH1AnLRfhLCrEhj7h8",
  "key20": "2NqtijQxegJx3jBmzStKCvhjGc1AJaMTkpkTxhTRKRYygV6edGyx9edgr5T7AXcuZ1aw7fseH679wBBJV53BiSGD",
  "key21": "4bc4uQmmgDwaC6EMfYLkBvKun3t4tQHTLQJ3k9dibQJziYbTnjHsxh73UCaVPkr2DPTWqiK8MmxA53RBVB3pprDi",
  "key22": "4Ub6WePmoz3NbBxKQEoL43MBBuXLow6RXqFd6RpshCoKdPW5i6t5FaJuuJSQULT776zkoeXwu8i2R86qgFPpqqBP",
  "key23": "67dzBVT6e1yRgY5HY2NXRCqrLD7obK2v6ZZ8A423xzGL3wdrxHjMN87RoEDztJS7Tt8xsJkeCRsg2KbKeuf46q2v",
  "key24": "Fdxz352nV31ECxUeQVLPbzSFp9MBbEnzUbw6ifWD8tjr2faNbjShxZKmhGxtqdkzaWun46AZFzkTGGccycyVHzf",
  "key25": "55tX6LcDStaS9k8m8pdN4XbnRuzsrbc81xESTGEPu4U8kwmDDbnstD6UAcCzmzLiVbPL3DzRHUQxCaH4QerDveNC",
  "key26": "5rVKe7Dkke4eyXVowHe991dyUVS4BJ7792b1k8RYYDM5MnJmbGLLoAttReWvn2qC7c2hEsMgggEYLu8mmCp2SLWF",
  "key27": "2E7Y5yfMtT4iyUXwB66QTRgF666FYB4KVV6m6uZHadiSs5uDDN1VKJFXPHhL2FdyxAJCnNDpxQGCX2aZSG4kswya",
  "key28": "5CaRJzwTsgi2Fi2LuFBXWx8yZ1ZWWxDZzSyLsD3GZxWhMXLcRXYrxfRwFpo8ixNd2jLjHEvFcDrHcuv88SdCPEuf",
  "key29": "4fPFdrtLjDqKLbM9HG5Bnkpq1THusZP9BK67DAUfvMbDf9wk56rxsrDFELDkKPgfoVJrdLtsK1pT1ro5TVwdbEMT",
  "key30": "4irEPrAWPr81bfipJLNVbLZ13wvNrVRfQcjZ6C2XNaPKsFRHYuMfbbEawGVFQisV6tC2fxatBUjUKHY7jsFt2mN8",
  "key31": "nFxhR9w9JoGk2qmiXdbrMiU2ykz2nTJw3mAqqy3t33irbWHKvJAJkTEzQTMuztetTg2CuVgMsTWG9inZ1Cqet4d",
  "key32": "5WeYPutpQbZ77q2S34mUksWE2Qr7UXdkX25qmPvu2LMnpFBYi8yCt6zjtBu4LGFfACC4PX4WuPofPcuZAoaV5iaG",
  "key33": "3M9ESWeJvKDtJVf226F6nZ4J5aYmMLPVHfMMzJ8BGuJCnXgWVCBLatVdvSxY4XG9sHmKSEPHyQjpeEBPKkgD2ZJB",
  "key34": "4Y4VMBeKBppDKWdSRkzaqb4gV6rvHCLHKN762vVJh79Ew9wsW1FAKzJLKFuLPMN6zL6TCdeqfsTVdsm1d8UYrfwf",
  "key35": "3eZFQxq2Z8p73xvavU59brpwUpLTuct7BkuyJmPaaVBuUhe7EQmd9C2N5StFTnfLwB86yXBrkGCXKtrKaMm2kT6T",
  "key36": "4y92iZ4FbwRptMuFtvmQFVnYkSACGd1AcYuGL7ccC9Yu2SsPEyyM5GHcStQZwVsewMBC3Q22fnhnc6Gq37K8P42g",
  "key37": "5EDyUwYEA8LA2H2GW1LwW8BdbmNRdsFTSCitwJ1KsCPTCmRwNRHd9NS5EGUAquhdvyd9nJoFoy4vCTYxGgZMuYuk"
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
