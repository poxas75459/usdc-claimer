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
    "DSRGWFQgxyKkaYDv2Pktdc11MKLVhvLLQiEWEuFEy3JGKp4vDA3fSV7QotybSGUHbrRYbfNkM86Wainqg7tgRwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TSfHwUeDjpnmnV3gxrDbbpHWwv9uoih86Mr9PjUT8HQppYGYATCBjbjwcr5uWDrtUBynYaquqeH6Hd2rqTa2Ta",
  "key1": "5gSfEkkTtkRewea67WDgEazrDEAtG16jd6ZHuUrwzAadtjiA8SreFixNcJeUFt4gfwp2LwJfkUC5haJeqZScZfzg",
  "key2": "5rSMKHBHoAbSCMF1BCZ41MM21SH6ReEEXpVB98AVfiP7bbefzdmm7r9yY9pw5iQFFZsfSG8nG84gva71NzAaT6JM",
  "key3": "21vHheRw7xiusaiTwwX7VYWy4veDGzpqCgb9cnug6GXrtrUAPWbSVEGbkdoCWDKUeqig29D6UtFacpYYaLRa7a6f",
  "key4": "21rgCznX9z2K9GKTZNVFBiFLsLPbMq8ewM9oDC5PNgUprp74c6qfkkGt9vZakiNTAZnvssYvBAXGNHR7Puin1L8e",
  "key5": "58BrBEioPPVAk83ZbkgpgQDTnqxgUkGJJze4prWYMccHxyGGgrSoAsEmYGPhAJQn44ioav1zLw67dDCLjqLjHMhG",
  "key6": "21R47X6camkfETeaifJhSzfZqAUADxabmU8qaosAr4jA22VuY1TUZ9ZbMQmqYpnHSSBE4kxDU4AsxDwPPNapGKiG",
  "key7": "2yHzn32HupYKXzNmoKbHjYFishwLAZEC7CtuUjMkzFW5ZnVt67HT33DQ1S19VHc4rnLUEZoxBp5ZwpHKdF78dejT",
  "key8": "kxAg3AUkmTyGXmUeoq3XZEuyEtzXea1sZi8RPX9d2qZp3cXHBxbyvEHtSnydzusj3LEq1PqHGzFTmbrM3atavCP",
  "key9": "5aTpHz1dicuoZZbcxvA4Y1SuoQyQYfzNhmv82qnZ6byUJyF6ouVYm3b1E4HVr536fqioLfXTsnvZfP7ZAbjRbCQv",
  "key10": "5LCHgZozRow3R5K2boLquUu9YgAjJ81sAZws25jNfGfcVbKkgzLPy9a9Lkiz1VvXjPKR4bKMSrv5XEN8agNtYgey",
  "key11": "NwMR8gDr2D71tQyPGYdZweDCdLN1eBQqhuRnLhB2QghorMsY2ShxvMjx3JXD2HC3Ufzthrriap3Xf7t5uz3SVFu",
  "key12": "Ktt4Pr3BcE6mfsFfsNaoVbt3LrvcpbpaYFiGwyPqqUxaJ2cRZb9ehW4AQPwhGRpUUuBDZt6XDabMXsNnBWGtwTn",
  "key13": "3DZraqhRdx9o3LdDCTUuYrGpeygKBJ9iyAQmnxFg8YmXMSBPkeZtipGcfgvEtoabgTf5M35E9LwtUeLh272WHeRR",
  "key14": "2Fv9zbQbnV3FpCVzFdnHAUyUhTgamrmbfLHCA24M8Z6PrUk81LZkDjeMzseWFv7mvNmcdgDyfWr4zsKJFEPrhcCg",
  "key15": "5UNKGP1z3XbCB7VP5qX19bu3Wh6xtSsoBXhz547nuyTWiDJafxU1vz3FMhrc5kS8sDEj927iFjB3Kqv4XREWV4t2",
  "key16": "59rXJgESgWV267xfABXworn5DcGrgZxmzvwWTHdbTWwfv7DG3hJygbJhcyuFt4cwXwcJSqfomCYp9k3GE9CqnAdi",
  "key17": "u2i7wx8vs9YLWKuseqd3Ymo83NmgGMmv1xQa1mfT5CPKNj5ug6Ko71hmYUzyDSBwCXwB7EM5Asu3rCxxCqAGGWJ",
  "key18": "dB6XoHVj5NZHMaiDwkExAZxUxKXTe1Siy9KxyZTdr5KhiWQWJBhPUoTqHvrN4Aq5Y7rsNLh2W2njdHKcjK7G1QV",
  "key19": "5wfjiAJMLokrPVQazUjSNoAyuwueAfRMfdQb3gcxQ1ZJMQ1dWxHYEfqXXDVswg4965cv13sczhDoK4ku92ZydWsZ",
  "key20": "UrVEGnDgVWUtaA8mysNSuhHdFDruDsLkWZHNRk5eDkRi959ZTVUG5WNTUNfQvYCEdfMVWuMAAf5RakzrKwyMoTv",
  "key21": "67cYXESXVuAatVayX5fuK4fKk257gWQJpEnkTekp3SYSbE26Q4ViV25pQTirUQ2dPzvTF5p1SDpNVUHfG5z4XZ1d",
  "key22": "W7z6abBUcosjnruXYqBbs5egPY5MiD2rxQ8M17ZEqGpB6v8s1FdbMEJnMPsDYWcX1KfWe455wK4EGN6M19ibFpv",
  "key23": "5U5PpTjXSjP1wksP742waH4UZXbhWZ1nJec1U7YtaymufZREjVcuv5EXJK3ZPewzHTYtbJ9P3bg6GpKp9MRtDgSk",
  "key24": "5f9dafLgtb9J6qK9PXLPdfthN3Dnes6iuWuuBZ3Rsk2cU6Ui93ELj6KLEV4WrSSd9Wh2bbXt5wC9MdER1oHAku4h",
  "key25": "5V6wesReezd4tb2SYJHVDkE6rW8A759pMsBniKHpcbDEWzBGTzq5pEfAYbKGHHhvkUFKGDkjN1CmkudPLZvjcsf5",
  "key26": "57Wea71EjDBCueBgsuknkMYu7khPaeBcebTBjsm7ADszM188PEG3vg3aMgm4F1rF7HCiv1hhxZPiRofF47SfPP6p",
  "key27": "Bnwg853SMPfAdS4ejYrF498cKQTiZMrdQ4yrFBDDZXsKG1zxnk7DCC6yF6UoVEM55kygsFztqqMzs9pps1XzPA4",
  "key28": "5LgMifi51HdLwcsAhxABL993kCQQc7TpsafEdLJyPCB9k5agpcpX7mxL9Q18FmvV4jcTtTUyQYYCT1bYB3CE864T",
  "key29": "3DQ46HJYRh5dqSG3ZekHf5AMBDcqPBjNctT4rS8bFaHnJiWkTm4EmMtiWA3fG2HizjVemoUidxEvwp3MaqMH7NRr",
  "key30": "2FLXRQa9zqzbYZiV6XTMDLLdWX8HndxV5epGRwCkCsho3kYyNvEs75Y755ZYqgfEbvfQJ6ib6TbUg7bZiRc48KFv",
  "key31": "3UC1WM5h9cYU6v3pDM7SbndSyUnDDFEgvSLHixoBsHwH7vDnirmLdLp7YV1vsRgWD7CcoXzyEh4TF2umvPWvFVdY",
  "key32": "57g96ZPirnydkbBjvMejZrjCjaDRhwxEEYyxVyzJpV34PMB2QUmukdwkY7uMLiS1spBygdWbyJGGFdChCPWvnEe3",
  "key33": "yRQrjkGyCGeZ5Nx8sFQzwZ3KR1eisZsiA27hjikMG1ggPE9vSceFePT9RuSb4uWF3K47ULmAgErWj1kJYAoEvbS",
  "key34": "4BRRvhH5xyFX3F53XUZT1DJFTQRLBanHUixGojD5z87beWqSP9PsefNm8QL8gFAMAXtzCLc9CjMAJRC8JodDHQbe",
  "key35": "2etMF5iqNNL2zNnsbztdcf5tjFKRdmhVPs5gTTXJ1CJU8KAqJWHNegZLBZBn7cYZ4J79KGubnA29QtyNrz1EoeQC",
  "key36": "36Z7ZvoALo4dAFenPZS4rBKefkKQrh8UQvqnDapTn8WfdLK2PyG48A14ybZVVAvXapZiijcPTyddrj6ikqmNzFQM",
  "key37": "64hW4ArjSoSSrg9qmKuudAuYwGmiR7E7e1nJh5CiVtN2k9sGZ18ScsXHKxbsJjinASYHdPYhQhjxaouz6n9Mc5H6"
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
