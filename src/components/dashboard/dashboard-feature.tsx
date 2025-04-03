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
    "241JzJaqrpz5QbbNDGfnzucv2Vg5HDs2UpgJoGQkY2yZtjYwtoJ1sSLG8WEuycf7xE3jXXYaRdzR7sV2cfcvtuzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J1SECs3WMjcqmRhQW4fFv31pG8Nvm9zSR7nRQrpJF6sscQrwcT9eGV3kAoncBdC3NJ19DESzWk3Vi7b9pvA2xJn",
  "key1": "3KkUYxMyfE5oab2Qn7JoXEtqbEzYMt91xPKMa5jcRSZDKKTrXroPwN6DXaYCE1yyKYPf1DFNDsqESmGRbrXGWNtv",
  "key2": "4yWrDJRF8yy9N18Uwuk4Dk4znzvphgvBLMu7G4CZ4Vm4im9qH8UxEJsFnY5tT5MquxmjY9n77oYvTPY6eHEfz8Ct",
  "key3": "3MByCAgFGfKS76SZmCZn8CCygCoqeJL41wsxg316ucsguk1tBcsQREvyS7SqGHv5xwzxdoXX4mMnqZtd19eagMXJ",
  "key4": "4E1iLy7ecM5mtWEaZgGCGTAwT38YibJsqxbzC26wEzLWGNkWL3ac4Gsqyo5samicckfL6NF8oipFCL7T8d6rEm2g",
  "key5": "2jVvgbnqfy9HQGhs2TXV3ozFbrNwCJ3K4RaaYrcFYhAxC72QcxETSQtXBkzpzxPVookvkmiiuDto6WkbQQa3m1gc",
  "key6": "6756b7LBDm3paM9oPMoN4wJUTqjGQ3mcTNXkoP9ZAapzzp9LSs28DfhsaEzjHG5z3411zA4K3ZPfACH94aLvSUqR",
  "key7": "2ihsX46H3NUsPYWzTGrzVj9bHG5dXadbZyKg7GLgkDsE2KfduP8cnT3eqG8n3HK7yM9Q1ntse13Na9CVPYkY6EJC",
  "key8": "2Pt9Cr7rU3JHWcAV2gJrATyZNJb4iWzEibdxfDLDB74J1dJXzGwES6cbf6m3agR5xsgD95dNTySrfihw99wUzW8G",
  "key9": "53o115MK2ofrD237fdL3h8Q9WsX7ARp2nQZXo6K85mMukVY6tJgKVajydgAixaPftmhqH2WqwDNQBZSj4VgpjP1R",
  "key10": "5SUg7iCdppHoKTqFPmntgye32KUwFKNZPwHvEZbRF68UDJwMXaSvQ94SRPsDUtY4GvkkphBEX3u4d3DJLy5T5oNF",
  "key11": "5Xw3NY7aH1CQipa8okdiTAMQC9ehfpYqwoSgfhpPXq13u7E3XDckEnnAqbGbXJYqWGUjrBMywHJ3fcyrsax5CAAV",
  "key12": "65HFRButzSUdM9a2fsPwPsXEbTCriE5foBxfoH2VcXUjKbC3VbynTc64CXyL5SUo1XaSePsL9EhTgdWQY8WyiXTC",
  "key13": "2gXcPBUVbmKjSvHC48ycicr8wFnDZqYnpKZqGcnfGxLVvr8M2YCUkA67wbFhTHiXjxekSER4Se24QuzwSGs6usmx",
  "key14": "4F3QiNFDSiWU3BuBfHzSeSsCMdxUvwimRTdf2xg1KJLWvVUPq2CmHTQym3eQJetaCpz1fsjdnW6nNyUmSP7u53VR",
  "key15": "5ZMhT6BcCnFiVX9EkVvygSB5xukbVQ2oo1i688XmGWjStb1VzJNTAqAPAJ25z9DGc9fZ7W3L4ZG5yj5Aoj3qNaWF",
  "key16": "4PLbW3miGVi2AUjp9fUBkM6qcqCx1pnai3AqE1Lq78Ldwa3J8nNeL3pyy1n3MWdHj5u97eYpAuxCGLXqttj9F2KA",
  "key17": "35xyv3Hu2pmynpocUhCP4Tr5CwDWAtptpcwrb8Di4ML4pix1bsddofdbXViMWpUDRV8VX62ZvkdH8ajrDSnG1RZd",
  "key18": "641Uk3eqQkQLeMxsCx2WgX1keFdxisRh75guFAgkxhWJeSMf6n1JZiRbTuHJkYU6J77hBy8c6fVMAveB8z3N36je",
  "key19": "5yVnjVKMjRLxoQCvarXF6jggmJdM3PX6Pe6GFzebbCtH4BFesF5matCEQYTsVJSdw9ntMzBHRDtWdEMS1n5qepMy",
  "key20": "2nKcnLSmVc2twUjHJqMhcEVWoFjK9jsMu55AB82NVd17GVrHWjCsnU6mvC9x8LK9VGRPoZJ6QhWehpVPGnfnib71",
  "key21": "45rwNbvZZUSjFS2scH8F7tj9yuKoPdazoVrobcZuVDFJZNdiXv6G1vi7M75BJ5JHvFvpP2wPywSxRnD8T9vZNdmM",
  "key22": "2u9WZS3A5rKEHenP7vaPDQjmCMHZwFqJRfZ9q1DwgqgbuUrSU79BKpdxZbZpt2eCyUt4GM2BNGb7fD6HwnGTtmhy",
  "key23": "2Vv7ARoeerLWosT2P5KWa6eZ3iV5A7X1rNmyC5dTSBnu6PqQVCvcEX5jo3LR4Y5wQBF7SAbXqJopkyVQFDm2NW1Z",
  "key24": "mdFcT1Fuf9aV1fBFLi1qVk13KWw7JRbP6YaDv5oyVtYE59cPxRSAWHuZ1YB2j8kCrMFqDMJKRyuUB7NJj3xcZEM",
  "key25": "5r7xekBbopAXdYuqbJ2V45xLDDSxRVRiFiFEBSEaAkECvoxYLHGdm2TUxcb9cD9BCf8qnX97SxHvL2g9ges75916",
  "key26": "2xuQTdUjppyTM99s4fXHhDxrZkDivG6HKXbggiJyVMAHNaK9RNDYtipLjLBVATWMpnCa2rFUqhzDjeDxSF4XpCRZ",
  "key27": "3MhTVGfpb2WqtpcnexXDj7wht2JRE3qHiFkM5efCc2ZPwdL28rgKGJMHtkJwsP2vkiY28YQxf4ED8birsMU34r7m",
  "key28": "5CGAsjainjAby8Aze9iaXyCMfx5kp21drguAtaSnvBGQhd9MbdLk9ta4KJCaFhXyja6iPwd8kT65GGescd3xNiBw",
  "key29": "2fTwLw1Y4PE5SBgM7QgqUmRS29vyZqepVCUnK5AduxPr35b7i2JDXSh2eCchueKi3juMJ5scXNJXaZHQ643UxkJy",
  "key30": "2yiYLb9aWKUX61NALMEgG3sRRBrVZyg9FWHeXasFw9yAuMHoLghcNjHFUFAme8Bgsj5XgJsRvsVNq6fpa9Cr5fow",
  "key31": "3HKA8R8GTRrKRZcxxR1icbLHPJvYb4svk9Tn1Xxucird4N35mQP9VLUp6Nm9v9GgdUGQeRCbw7G8SXJ1S8P6C5W4",
  "key32": "67STGrZpDWMgmy8uSiYVg6grQk6qBeo6AsrHLFxTss4zh32QfQShZJ9QWc7PRF6HRSVS9FE5yjc52n9kiX22HZLN",
  "key33": "3G3FtSFa9Ki3QsgQH2TkXbaTFUsxfYA7jK9iDny5SesT5mTLVDrHbqhXZgpJBgCxwtszygmizk9fSNxSCbu7R3kt",
  "key34": "4aoV6DFxWAEeoXuntvmudhNMZaaFME7wuieYakogqaXcE3rbecP7mCwy3HX2ftJN5Tp9DxZAYKqZQXVw9G6wKqin",
  "key35": "2y8n4YrQY3ptMQAhYxGtwa61YgnmsCq4GM1B1cxeiv9Fr8FiPPcARL6LBPbczSNDLytvN4hHNzhSp4KTLRiXuzQm",
  "key36": "FNEPuXP7KRAZcxwfXmdTHpWAf5Pg6u9ZCgTovqGkMNqS8FdZX2Kt5KEep54VW2zSFKvj9pbdJVGaJRcRXbXUVPS",
  "key37": "2ySm7UgND7cbw1Uwgd68hHjmYyTEnYTPa6oBGk84NhVAinDe6SfnfBRtSRf6BWKoxiTQw1VweZdCdmkSSiCSvcZn",
  "key38": "ULuPeYpW6kxR3T97AkLFTsCjEvMexvBENspCpzStKP6MQUeW414wUwRBfHmYnBwHjMyXag6Qabp2mLQFn5FS9ua",
  "key39": "2NdTrs2wBodb2NiRXvkBjn9NUEkQKK1obqdGmQAjCKhwakxugoNL5X2qiFYyecuCvRExTqMJUmCFnQBY6xXeHWR",
  "key40": "nVsjLZe6WzizH24KDHJB6xURzJqqvqpwqwr4dzTRCBLbdXM8DZiFSNsqmP6jERJXghLqLBsPw5qFR6Yb3xpTGG2",
  "key41": "245SssGWBosdk3Bkr4u83w7GJ39DioDnEoVz4BTvpc3uFptD7SGTxSwkgxe83VcT5BN6wmyMbHHWWvKLuVXTXPZm",
  "key42": "3LWCuiRC8wZGhDSn3AwmVv9FJXUgDtrVjgadFqF8xwZ4KWo1unPxFMoZbnJo51UEQzAaparCoeUAcakTUKvorpkv",
  "key43": "29gQuY4twKZ6Dz3jD2Nc4zqk1RFLvqXFmHWwgVhkGZyBztY3wPGcKrdmLZw8271SLqpf7pJHDQhdsFp7HK7Lt99H",
  "key44": "5jijCKDHSHaLmrbfhcHdwD6qBP83rDPuMwD4x7mrzFgNnNc7pAqbQ3kUTrYpaU4Hn6Urm3Je39jsBrpHwyBgwE2Z",
  "key45": "2Chcw34GmVs1hjTtCzngdy3dHy1A9uVY3UTZN3xNSoSFauqD2VvCDjb33acCupg7iERan726NdNfV57UBtCGMeyY",
  "key46": "3xXSNXaQPu8pY9HFA5cdAepZBXHEydYYBomXuzJ7faZmwRp2zxbwnTjDEMLrmWBFNr7jjZiU5qx92Kn8ei6M78Di",
  "key47": "3Bt2WRtzE2dkmz5CRK2Zk8ThAsDafq22EbsiBLvc9Yifzwfm2FCHXKDA2ueRhGvE6jE1iWsqWQQfJP3ZyPKimvtf",
  "key48": "4bSoXSYZhJu1p36PdvLPKUPkgEhqjdnbzosG1r2bfg5pFFWydwMspVFUroZCRBKYLkz7mgCydtvEUHkwXxjPsaLs",
  "key49": "4yUoV1vvBtQYbSMtuF5tAKRsiddAXSbMeab3JiG3n82jxikgqjxqW5ydZkyHHjNtHTERreSXZHsgPgVuK4zZ6KH"
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
