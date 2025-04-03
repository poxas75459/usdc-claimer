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
    "22QHTpWboBxSTniefRD3fx5qhkiVm6SHr1cDrf5YQ7H3juzzzesrQunJByTMD9iBhhBqddzhVAUA7vf62Vid4aaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CnkTP1uLxHz8XP8eRzutWGWqnu65EwmSREaAsMmN5LtkMnscGUbS9vE87yo6G3UZXjTUHASXGJYzteNyBu1ApfG",
  "key1": "4hgW9RMxJRQjsQL5yx5RFYVxnY9ME9uoXEHrcx5SEQXvuCVvA1H1wopCaWiariFcq9cB2hAzZDnRNrJ6oc9tzLWZ",
  "key2": "4iUUQNgbKxz8i1u37snmNHwfYAuph47pTnh6J6LRZpuMmRx7pc8dfFWXvxhkLaKAtSHFNjmP6RT5Vfm9NSAJMpuo",
  "key3": "3QhebZbPN25Uv9NzYMgNz8XiyQkrNj6w5sc724r2BHk3M1Gv6s3bCfn6HYH7Ya7nhLcPDiHnjfkfktj8pEoXXFhd",
  "key4": "4yhYF54xZjN6HbfPL1QNWh6TAq1E11w2r3WCEp4gStwwfUfZXPzFUR4yW6VYZCj7riXTd1oTSKYzkjY4S9atzmrC",
  "key5": "45b8RVD5xHJ2gfvk5GFkqcQtp8f1LG6QLyDiZDY65bHB4G33YRdotxdYidXnTtHHUff4ZrVHcTWUG5c3oumePEZ4",
  "key6": "nte5eba8qyUfqgRY6RKrpRZGyeYAHnFBHhCLPGyp3Ez5z4BQ8dMi1bN5X7UQX4YZS4sXzxSjaGm8cnEYkB43vPA",
  "key7": "4byKip9ZhnLDhpAQtDHPxTe8JGAqWjv6s7EHzz4cyhBdVUw5V5VPo2BJ4wQveGawEJ2GrYtFsQhJvDZZfxYQayjE",
  "key8": "2kRPM1jT9MctzQepMgzwu5PmbDNu9cq8sbiT8tmEvZxWz5RFXPrJ2kiWUzZqEaQv4VMTMNus79RuACP3ZTybukCq",
  "key9": "qVvSaHR7qzsYDAt6FirzmxEVTiy3EF9SrrypiM6fJFg17H1793gLMAkmnACZu4Jm9bBNK2Zi5vjF6dcBhwoPq4U",
  "key10": "3GRyWqrjhJAu6v1z5rb3GRbBCYtk5WhPNPRBk263S6xmqAdz4LhZZFTCsZkCGeST2GJkurKQa6fixPrA42PWxs9Z",
  "key11": "44kos5umzCg7wrYjKguGNMCDZHKh7gWVGvJN5c8Fdc3iW8ighBMbRGRgFjiN3fFtpFCRwADRa4VytbJ3YXRp67e9",
  "key12": "2WubkGKf62LVVmqUoSmkeXvQoEUt5mGQMbYHDXiiJEvMW8xcrFGE8xhEfwRoMDjXCzRyNfueQkBR41ksQ9n1iKWB",
  "key13": "22CvvCGedv66S6c1nKfz4d7JbhDViKsD8FGRvsy4szP9FbSETmD64WMwhDrdWSgdSCDM17nU29jZZSKKoFHxG1Cq",
  "key14": "3mg74ksaQvYuNZnX1YYyk6vgBVPDpWxbPDnvQebTDv7QmXZD93rvikibqRxwLWbk8jJWGihnNPhntjMQkPfXBeDH",
  "key15": "4jrixKc36dnNNVVNmcq92ya79whzhYu4quwdLVrYL4Ns5HxZQbK2ii7M718cduh1VdB59PY6DTogEo4y3mFhcWe5",
  "key16": "YhdTZQZKebm5LkC7AWJYn1GtsWfUiyzhFGEgkZuth7iZ4V3HTSKZdxVWyHzwBHxnVfwPLCcxM2MkMvSjwdDwkzJ",
  "key17": "2JbVRg8QjGk5GaJBYtEEDgdBSH5A99zWhf4QyVrnNENKAZjk4Uy8v1vRAaam6s5frYyVrj2ECdmv15bp349aSL59",
  "key18": "4KB2Yc6n3T4EWrCGc1fdzCXjdGN9mk7Jt2ZTMbzJXzEz3Y4oKWJq43bretfz4Bz3Wmn569XMDq9VL2Sv5NmEMr47",
  "key19": "2SARhAxeSWRGDYN76fGtCLGH54GQsBspWgjwg8LALeyVUSnJytpJD7B2eESL6ZD8c58iNPzzJAFk3RaCE26L1NBG",
  "key20": "2YtztVkhWLWomWNH3L741poVDjjBmiVxweymRzPo9ckopwVu1XqPFfUbokE78CEYqiG4RXRFSgDgDtgubjX5zoaE",
  "key21": "5L4Rji8oSwfTkfiak2ZoxLbDAukp8HxjM5xehAV599SeB9F5SDJ86kCPhs9972cHYDyQeGg54gFHT2H7QuVBCoA1",
  "key22": "35szXvbeEmzJLDsgmyZixXyLPEYUts423AHzGD3pMHJ2VkiirKTJYRRA9bxFfkSQD2hw8uC3cazgeGj9MxbeKAuA",
  "key23": "4zFLJe6py3sQGYHdWQUxcEHdBVfxfMUxe7HCdXGxV9prmSaLrryMXdYAGrUi8z7r5bNvhkT877pjLFhcJH6MV7hJ",
  "key24": "5m3kvVC8ufZVgKYi5qHPMxsdQGj8JEQXtX66LyJLVa6DVPXtMPv8gwfZJWbLqXiDodxNCf6BMKc5XCMYdi1o5Fwp",
  "key25": "3pKaZbtL9NNYPBZSzuV58tPJWPpJ58ekYRpcfb4W7nsGMbGgWigTQEfuZ2PMCXyZX5g2f2myvV1TvSxN7f14v74p",
  "key26": "2FH885bEXHZWPFk1DBpguCyzsxeMruWrgegBWu7c2BDtnn59nHW4ZKN1ESxeWC3wVfQZqu2sp5RZ4gyjK83eHo8K",
  "key27": "56N1S29B1DpuUyMRKzyD3twnvm7s3rtpGAboNycXvkkz8eXq1zfDmr1uGpzYibZXAcEP94mSF4g4DbbHUbnLyemU",
  "key28": "WSWmSY9nLZ2RXGzzZKoNY79t7wW3KhGcGBzgQF5PEC1cKVGxQA8BC7dW8ouq8ycrTka18jZv8irASJZyuFH5run",
  "key29": "4SbsoULD7vEcGpZUBS24rU1ssQEXYyjBNXXWSaDNwF5c2G3qyrcJi5C75CV8UUjkShYafg62bntKiB5KoB4JXYJA",
  "key30": "2NPGt2FDSaeFNcBEMydE1qdwJ6CfhK2SLtLn6PKMXjeh52g6C8XscnyPGX5UoEA8Ws8AyHWwNcGFqvfbzeksxNEP",
  "key31": "5c6kU7mgdqQsmeeTeT2irqM6Bx8UC39wLLKvqEHC7D91RRFYLCsPF2XXNRmg2RZGmsU5RTsgBjR1Z7WpLg1cmmTD",
  "key32": "2zQzKPALfRs9QgamARwBbFb4KNNViFqUaxWgUsuxYPe5FuQYCtverXDsxBFjEXMkT6TdBMr2pB9WA1pGhnEaK9KH",
  "key33": "3mwABhGhHUejA6CQmgJynxzJZyxDn9rAhYuDhsoxjm1Xnb3rWu5RBj6T25YL4jQM9QgYgGGjiAbcSjMxS2whKKA9",
  "key34": "5Ci4yvPXS45eMiP9TBuG2NGZLAPvrTBsiHwmhAH9MePMwKW4m6bsLA1CGYJyaNRdgHKZE1Yd45PGUvyjAhuXXnwK",
  "key35": "3cfn2tueSSemGLtyZmMpvmjNZTdxwrV7WyuzGdbLWsrdUHCaK6TEjHZ7g8GLavJmgSsDjEDDL54SDk2QATbiXvyU",
  "key36": "2DXPfLg954pGnhe6qtmgHhng5wqT4Vup76eGVj2kow8vEYJXJBS7EbTv1Pb4KRxzg4UuC5MATgBpssbWcnroALqk",
  "key37": "fNTKHhK4G8mf4LhcQCZjyfausEpuyqpNaMRPutpiM2AZ5CkK3KF8kBTcPxzj2bs6m9vxAKaVyMfZUX6N8FwYQmy",
  "key38": "5xpap3pd3SBMSt2wda4Yo9m9JzxdQwyqLHBV625urru67HZG5USp8Q6ye6Rp5ndrwBdCYQSEyMmVHT5U1eegHmiv",
  "key39": "3p3Wh2obi6zNhpCnjNxed8iQwCxmrgs6WKy62RWyR47NoQrxudZaSTbtxELy1TBNHmijNTzsYFLTuU6jmBHB4gSP",
  "key40": "4zWCipSLUaNtMNEXj4jCWY8b3ZbjAYCvBdAg5AxpGJLWBgSCuU44tJbbAL4Q3qPv8iG9TWT8d4NnJhDEAaM7NXg9",
  "key41": "3jSiR3aHMsMUnLZJdt3fFBBoUyrCYKzrrgLuRCsaYuw5g9L7Tz8eE2SVUSGqkoheKhUYvVCfWy1AKZ7L17cZh8fF",
  "key42": "341ETWPwaBfdTdWNe6pjHZ47SycTGxNhsHMvRc1VmfLrBURCsX2M4U8HWQSQsWVsAHjK5X49YSkQVycpaGzy6Qia",
  "key43": "2Yo8B9xMLEXFRGU87UtEa3WjX8j8YKP9qC7aSzQehXV6Gd19VTyiYe26CexJnsm6twnZ1pPiotyn4YbiiE3KGsCd",
  "key44": "2vUHLjkLynXzUfzehF8tLRkWNow5qz2nMK2P6hmPktSo5yupi8VRVeSvsCYL2UyMmUCtDiM4TDtbshUy8nfTFk1T",
  "key45": "5McQNxsiQp9gKtYBVLKG2WZpF1bpkDoFBfZqvChpp3LsPWLyB1YGWCNNovoFT88D3iBwmbFg9Wdu6AJxVJczufYd",
  "key46": "56EDk4ojV631rHZqWy1vA8QitZGt6jwL6YZrwT5wZLfFyxckMQh5fvAsTyYdSpzDXncE5tK4aHfrCTE3n3fxrLMz",
  "key47": "451iHndouTbyFBviAsTb8wkRYntt8FPQhrkHraa1JTPTcY7S5N2ehNCyLwp8nMqkGPEXkhXufeyQTejGHxRX3Dum",
  "key48": "5tRi7csuV3ZDrBLiDt3NZFF24Bqqb1gFnReFH1ifEmQm4GQ7GbaGUe29U1LtzAypQXEov7Nzki6yqJscTwNEtL41"
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
