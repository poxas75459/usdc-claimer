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
    "6UdtgKqKNXhtynPwdYn6HXrFnFFfyTRtmiy4yth2ZaXVVpiZXh4sGND4MXZHqEqFPDtKJyZW5zBFqfFUtdGePao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNY8kTNLocxkGdRvE3XsCdQs8SH96Yra6RLNrJjdrVXWqmun6dysxiZfkNPDX4bfHndhBsARugfynMK726U5TUM",
  "key1": "32imgEXVZR7KvHTAm1Dgs8QwYtYasYN2DG2jxnfwh3E1bcXJqA3fhSs8VoVhzJUVUohNf4vFUTBcuhNRm4ZtWRW9",
  "key2": "4ELS78ThMWzRRDUJe2EiMF5WgiKZ9x9hqf6KXC3Dkmy4hJYAPcQrmBDuowV7bZMgY7Ez8A8SBsLEd19vqvrJRxLT",
  "key3": "2GKMKsk9xMbQevjfSz9Wo4codipqXYzwh1bndCUk2yCW4V4sd2rsjdr2TbkpBwNyN2ggBwQvHQdwwr5sJ7HnX7w4",
  "key4": "3qr9FsV1YYTUTLz3c758Q457hhtHcP2qfwNSKV7bMXTzCNGAnHT9csPBRs5vSFC9cVxiK3ZwmzDJnJdKn4wCVvYo",
  "key5": "4c9fTBZXhs1S1izwv2PTScdMyJ3o1UQNyQscqaajHq9mvimFFhWSAT1e6Fg2r2Y174isvBtodC2jxTnDuUbzuzKd",
  "key6": "4NBi7JLrCf8G9RkGwBifC88c7GVFjN8a38VhhasqigCLBWtPTHXRH1YQUP8pA3KokkX7VAS9eFCz66TUX4gVm5rA",
  "key7": "3G9F8BwWwNruoJR53BaD41sZTcvwtfea3oxSnrEdDmDFHHSPrgiohZ7J27VN37UWF5KRVGmG1QWWxN6ZpcqowWtk",
  "key8": "2XwHz1VtvYQbWXxmanbQ79VExHeenV2Arxh7Y9ebiMEJwHDs8bqXEE3jqC6rNtNHRt1BgTNWVgfUrKfxVLYFFqHi",
  "key9": "4Y8ruCSfs6TPtb4mSCZuF6JLc6x2h6SyPGR9cXEhJ4ZYewWVyVSibvWmSkhYqdjCYw3ni4JAVX2jQci13WWCDFSW",
  "key10": "3a1ALFUjM8ia4byMp4SsLMECJkcVy52SuDf1N2aLW7zct7KvksydiPTwSSiegqov8wobP2fUAgW9GkL9MeTtaJCB",
  "key11": "4pwHxqseXw7qGJbvRbmnfMzEnUdBbQEQc2YizJCXUQEin2ZTDRy5jaSQb39UvEmYAhaYSxT7E72jmcPWxqK4zCMb",
  "key12": "CCSoW8HAvx71Vj2RkLFchZdyhM5w4Fus1W6bD1GrtXjNq3AtKEXShhBUN4f1Br45ncAei4qtT1fZttsog8SYQmj",
  "key13": "338JrCsURcSuoGoB631S3cS3d6N3ohqW9J7xaDGNGqsruQH1gLYv4ny4imu5KUjim64EToecGspRJx2PVcCMuuri",
  "key14": "42ZRCCswoBvCrrpYobLkB4wc2NeHWUD1wFtRZqt6jVn67kpJhiyb1Uz31dDQ5EWCugrGRjbdHKKWtwtpouQv4eNX",
  "key15": "3amNXoUYsZxis4yuZiRhMWESosR9N4GcoJnAXYmHNEmpu8evfmAb8guqPFpG8iuLrG9GFRin9oYjxqUUu1KgKGsi",
  "key16": "2pmG957wqvZGa1hs4mYv4KyY6TGUuhCK2z3rU429DiWbgmP9GKhYRWis4dmQ7b6yqkBqMdzczzJk9ph2eCV26A8R",
  "key17": "xE29pCFfYHdyRRrdf5fw53h4cwQL2wjCBiQTHdrF9v4thoytXDb4RrMtMJqcgp5AUx85N9h4Hz5i8ziTz2ZCUri",
  "key18": "5vkeL1eMpSwY4N7hwmmUeyUUUp21apvoZibA1mY9qfyHzLr4RZt5h6T4EST9bVrsZyA2C2CD49UAecRWDGTRqKk6",
  "key19": "5tQG9c2ePR7fhB53uV1KZeY7SbZ6VaphSujEGBMsRYpWe9VixdTX1KQC1CDByf1D6kVsi6FgQqXrjgvL2Lnq5Tvb",
  "key20": "4ueo56EzzoHWHy9RK7zjFKXPUBU7dMfc96tao1oShkAXvy5UnTsxayXm9mEDuvoiK9qEXkKMiHKSvnSYFpfLfPJD",
  "key21": "2ghUggxxsRhLDww8FYTMAJeXAqE1DS4kvfyfb5CP9huj2cU6JDZr31y66CmXmiZzMTi9RhETGZNTSTi6WovwJgrf",
  "key22": "44iXKJpgZNZd1ScANJgGfU2kGYke5zPuQi2pMqj5UPfb61hJQFEGiVKjpRHX1rUgi5169jyYtc4wDBGnzKjGch5w",
  "key23": "5ntMGGbhePRBEzxHpddc3XQw9zg3mtFJp8cvYYfKPfrVVzAoqr13SvYw4hkbgFKL6nLaWW87128vNFMbZka1RpFq",
  "key24": "3nDA72FcxJMZdwE44QTGKcKL9rLRoF46vQkdgA6AfsJP9taVDVkPx4s9MfDMGAU9t1s3DXsBUf9sd26QT7C5sorF",
  "key25": "7vGPjryuLG79sppoPkGyhML2aJWwsk3V4AugeyHD8Sv2pPFeD8zEXxTd9m1oMvyfaLsEDjDXYLQ1MYdDDENsUgt",
  "key26": "bTNnK6aY1yi7ghavZmkDCJj8QC9VX55SZVVM9MU6fpKZQyp4nUHAcMuQo5TxvmvRMirpaP3mP4XRCoW7dTbuLcQ",
  "key27": "mWeQTE1qvnjiJuPRGNuZB7SheuitUbfkfoUju8gxSiH3Qvps8FxQmsLbhxKMLCVmxxsKVrApCDLeE65E95brdtN",
  "key28": "2XKPwAAiV7U9NN94uzzHFbX7Rygmn5nv6EboJj3XG5thw7e2m5ecwd88YG5hgtrZfXAytJSSpxCykUZxTEp4dVEy",
  "key29": "5dz7Sp3R3Qa4fUMvYt6qWCx5SUNr5dyubv9gAxysE4X6rfj3i67LKrZsXC2mn9e7fZGqesuM6QNHUPCpTyCfB38Q",
  "key30": "2272WCr6FLuhqnmfZnDdNZLmUZdyVyTmeH1o6yZ9kEmqJdmiwNhB18T28HfdJqsTtwoz3nbr6uekj2t1yueNorQd",
  "key31": "3xjR9Ytp1h9LnFXbMPrX2rHpZZ3V5yjxnCorDYBBJKVQh137Eu3qwaNrdkc36v6i3mYFcPQJ31atws4QP1KhgNAh",
  "key32": "oimYYaBTDRvXJDoTC2B5uk56gYCUt27N2y4u5JkbXXhdnkHjkwSm9dwKbc8b5FeZzYNjq9SJwR5QGFa43tfTf2J",
  "key33": "DM4iaYP9n4JrPrVnt3mbdx8N821vpfEUjuKN53KbAtpAXXFCqaH76FWiJ6qjYTUPuNQi49kzShT2nUukPNs6fuq",
  "key34": "seHcWaeaU9M7AYNRNedbKNw6ga44omAfpAzyvRKg6PCGeVzqKQ5zuFStxRpv4XiH9fnoPLuSxgLNByx1XBh1sz5",
  "key35": "2xVrX6rzZbc4P2dEmiK4U7edqfaNyFEJpX6dQ6SoB95oTuaiTGhLQWN6AzLv4721ehRaUYARvGK4ywYWLNUXxofV",
  "key36": "253TKCs6dA5F2wjUKbUHfLMf7tNwm6gHSnHacjgvi6ytf4BwDmWNmGnopTsezxLCeFpMjAx9CtGzZZFinyZ6yqa3",
  "key37": "QTnbCSh7zswqCGK4v5v31LSxpmJ4N5phL7zWMX56DpvXEFkcZSnQkdW52kyAMoc2PDULjeZb97xmhyJZoKmatGT",
  "key38": "jXrqF2KJtHrgftbDucs82NyMzybz9YBEeuwu1GP1ty5YLqjirUaU1QcZSYLwMwH9S6iiiowqMpHz86UCz5LkFwg",
  "key39": "ybn2ed92inECqmpai4bncWfceanFXJSjvaFxfNpkySczLxqX2WpYyPknfxaGGA7crUM76yTmGVqDspudrynRvGb",
  "key40": "8xL58dgHuvMFomJbgDWt9SkikncMk3KVcNUDLYZUozTRAno4mhSqkTUvkybWpBohsPPkQzGybMPPRTyYzhZVgro",
  "key41": "2co3P9q7qeQCQaHNroMY67HYj6Mco1fFRVRioeQjcEPEvkxf3jWmD6mpA7CsPh2rB4GeaFTWR2JDdRZvTCHGMu55",
  "key42": "52XNvZzR2vFJoDFmZXddNUtWqmrkgRUKCVRWBcj5myhuqBenwzRs8uXgBpcvUyuk75gNCojcpty6wPqEmWYSEUX5"
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
