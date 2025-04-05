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
    "2UvzziLUM9o42YfBqDoZ2widxcNH5cJhocXuRtoNfCKVQ6D9JMw8EqaCgNBjH1RsHovMJAzAoVLB6k1DrXN67F9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7uYTGVQ3RaWH4zkW24rp7Vpy7pEFQ4WHWjwuTUoiKGrJksmWaxCv9qBFHNf989vcf89RyGjJj3Tc2buxZ4amGA",
  "key1": "3aUQJKyf5vKzJNr63dACpfBHzop4UhdTUCvDW7vF6m96cRFCdS7Q3J7hmkqAY1ZpYiX4dNFDNHvDnr3x8peagnDU",
  "key2": "5jEJmGh5oRbwrGuwgBtHH3xJcRynPHYLKjRyY1VuSCFzURFvNVVY7pfFGbbFCePQu23UB681xNfBkkwWQpu79yCn",
  "key3": "2GYZiYaghfLmoV8gDArxrJJ6nEVSKq6yBbTScoc4SV8oihoaXvta7AAhtSBvuyMs4dnBxa3RBosY43JvZXWudm1u",
  "key4": "2MqNKtk5ejMw8KzH21ruLywYgSBdnqk6XpjfbTutAXZab5EfYkME2ji6fU2N9UwBStews6PhNZB3QabGdRuy9VRw",
  "key5": "385nvMsBTN8Noby44xDrERXYVtzip1NZYzo1k6kKi5WYMQJB2LMBH4RFAuXeLBtgkmYL7bhyAXnyZoPTZztyBiGV",
  "key6": "2Mku5yiHN13WyTSBCgxnStAgtvEkR1zkoMTj9VjzPsdMvNMr5Lqf8xG52LfnnfgHxQx2DrhxUd4gvSwHWnNm3Mot",
  "key7": "5WCi5sAhXarnoRhzVi2M9W5F4jArC51FDxgRNUCizBRxKqTf4W7JBYuuUYa7Jqi8685BBYhjCPhksozaWhhAKvjD",
  "key8": "4saHYzvHucD6oz4km5yzTp2bJdXEKLtfZi5dGAReGPPdUNvpLdN3Eo9uK571Rae61PygSZ3HvTjzDd9P2w6DHn5E",
  "key9": "4xBVEM7iyE1wkLzpycQKL7Eb6vdj7LxLg2YrCbsYoLAfqsAXU8zyg1uCKtXE7MksN2HgEggY1MxzpfRKYjTHHsNp",
  "key10": "66tqtE62gPF8gVYrSQ7sXZSJFDvY2v6mDLPkt4yd6Q8VDSSgZ1axhDmyiBBoTG2ffk3oHp3pdDu7rqzGNyTbMmaM",
  "key11": "4RVkBc4YJsuUe1u1jKLn6Hv7TPcpmccRm2uQGU5cwHdXoBYRuSQ3soBu3aFCXSVuwxDe9q3yEfqMrFjFDzC9wf3r",
  "key12": "4coCaPGTCxyn5Aky88VXMuo6wp9reTvQxSoj3K7rgmrXVKjhsNFPBxvubZoZd3kN4GsEKiuFZiZQhaMaJ6nU6kKh",
  "key13": "2ZdnCAz87HNGvg8gjLfZWfw8gsc5ZfDuqn6yHpny1ANdZHRv9aviU7F7GfqPGoT223FpehKTE93gM2j8iZJ8co7T",
  "key14": "4mGinQ2k33nsiTasdL8AaeuSFDGz7uV8gagoAMfLBz8V4nPLapj9aKZTFCc6NgUC1gtbcmhLcQr9Cm4DmhxP4f5F",
  "key15": "2Q5VdXPNEuc4tYPjB4sNRSW1co1jGkxaadzGBFTiDAWmar1a2J6BNqzZsECKVF49LsXKUcQDA2AF17EmdbmtWJuL",
  "key16": "4xB5Kh8SDztVYFc5cC31UtnS59cmpNAhc6hAfSqpcKtU5vr2p1qbyozcXCeDX3XDxpCyDqZyvcRY35LkFzDHhez6",
  "key17": "63jSC8wzCBEer3jWtQby32kgBvbx6pkMyQYHB2ejtikUEcnLpFa6HRgTtVq3hmiMP83eJURAgqcAWFm62zpBQiJj",
  "key18": "5awuh9rTCpFXRZFxeqS7jpAcKyWoy2r3hb75WzduBkXb43nqQuRTq8gGPesXVZRZBGPH4YGznwJjjFaVRiRv8JVK",
  "key19": "3uYZEMcxfmms9JmG2GysKCaxatkdptexARd1ZKAD8Mro1BBRj4xJ85qJgZZF8oC6QZwLbD9b4PYFnu8PhrR9Jtt3",
  "key20": "Dt1fvmB83oJ1JwiBGM26gdCbXCpjApi2JbUoo6XwW5WvsmGnV5KDaKoSLZPCTg98GvuANFmSLfMz1aKEv4AVcZQ",
  "key21": "3CAq6UMeCEMBD1Vnzz9h6sTtWGw94QTJzys5ZJmJfDVW2teBW1EcLTkqsDvcXP5N3gBHKEaJfc7N16kQz2gTgdTu",
  "key22": "3EKZi2fd1MhLszdsZGjEfLvDmF84QFabzTZncNA9czp9raiGs43sDNBE2E9WMsNt2aphtmqsL4FPu58zTxWrVyjd",
  "key23": "2U6m4btvjh5RBwwVnECks8BkNyjXRfGDbWwz2Mu5erxCp6BnFv2pZ4bGcwAUQnBiCGMMW8RexSJZ3rntsCmKYyNR",
  "key24": "244J6c9NxSxkW3VfMvkkh4YFEo1kzGtUPBben12Ua3MqkufuwkxVs4xUo2mrxv4prRmiHFrDS9iptZ6vuG1Gm8A4",
  "key25": "83WLnLDCYryy9NsVCQpnYhnYHRCgycLwQyxM8jbnHoaFTjwxeKQmQ1tN7rQhcn5oWVJ189TYg55xtr93DPMktmW",
  "key26": "2dRNLDRvCvbeWpjrPvPLrNp2f5tiMz7bqsJbekATJ9N6EYLQhtEqasatwq4fd4sGP12DGhntRDF4sFsZ3pBbieoG",
  "key27": "3quVoKNNif4ArhMjHoDt1197kJat6taEEijSnJ5VV3ooawB8AcccdWgSckHwvwnwhWgs2ekdrQRGz6JEemFZrrpk",
  "key28": "3cYFhybZ9v5bK9woiwGrUQikwFkJkRBqm4TJkQkRntsvFvRadV4durM51g9u6PJzxZGVjxfFucGQbLJ9qVmhg6LH"
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
