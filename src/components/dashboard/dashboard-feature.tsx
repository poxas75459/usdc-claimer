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
    "5RTwLcNqQFQkdnGE44D6D2vsDKZDNm7cx6LyvLuxEJrV3RbdzM4AxDiPHs8oEucw9s2Z7wFNd6fTLzLuvveexpaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCbAeFX292qn4pEbgLdhLa42APy3DwHkQgWgVp4WmCExXsmxLYwGBDwM7z4pauaCgS4sWTe5Jw4coM1SiyP6xZC",
  "key1": "pVx8oK9bjbBWrcTFzXgQ7trWxCkanZGcGT3Whegb3LrexuFA8PZXgf4JZyggW659KZD4nMn9BZBo1KJftQNUpi2",
  "key2": "5YWmsQfvp5zWoksXgPNwGdjPHDqcFek8p2Zi1NM7f7wCX7DhF47Wuvxqc8szVY3H6XanzetVhGFxzTHTELfXASkm",
  "key3": "4t3FzpfmUYxAvESPPmCFLGYbXqFHieEwqjcjJBvcN4URNV7yLyvH8SmsXi8YVCJc9mF3aGFmbc5F398YNRb9xdat",
  "key4": "2dHeLaB1kxLCAx41VAGgViPPuSM3HRyDV32nrfa9UviNNdYxj8z3KcfT32RgZDFP5VT3arv16sJU7hRxipNZRx6n",
  "key5": "3owirxaWj311crJnUEuzmtxqQEWzzyg8NBDUBJKBFXiUpC3YuJUKCNHmD5Aocc6w57Hb8ZGA83q9Kd7Nov2ptcDb",
  "key6": "2Xuis95Fi3i8jTxisNdWqkNxZv48Pz3g16SrVNbXKKCMeduGYB87KvrUFiqeHPUQgRrTjMsAzcbZZa4aoPziyrBd",
  "key7": "PBGeycPPmfcs66dwQzC8unDcXGY6LRVEpCs8x1usPUbduAsrHUaLfbVwwtrzN1GXYngeJfgU1rTp8igR6TNmoVj",
  "key8": "3o9pq4BgRGB3BBhMGVCG39xHtZEzf3fXtr4cC9F7g4BRpKz3SFT3maSDueGwpKnBLcEpdpZ6ByGnNjwLmz9oU5ec",
  "key9": "4GtnK2pNdGcmPRDCwitxveGWoppU2rQRGgsXyVmLAo9DDLNCpsh1CSq9udErSMbZyz3Pwf23oivmq7xP18F2Po4i",
  "key10": "4mU7QXnWFEranNFUEqMMWXBXbqcW7ZyLREJ2PRKArsjGrjEqidffF2cT3HDLXKjsnEnLdfzJcZnPj7atGTfkPGzi",
  "key11": "3A45AG4nKDiHzon8fxMchgrrSA3PvvacVnSZgSkbauNUcW7ePXMEGUx9JcbWLd4kLvKQo5FecvfMZZ8HKfQjaKKw",
  "key12": "3T9Tyw51fiZ154ZZeSmwBCaoAcoaFAQMFvbL1anhbxqy3m4XZeVTrXvs9mZM6RoPoTLveD7Q2UGzvMVkeZTViaNn",
  "key13": "5xeVAdA7BV5dDTXporU9L5UinWG38cmGexvmdZ8K5azsZESwsSP73fNPiHiTQiDSYGGx15a3iKyPRNSvwp6wrws6",
  "key14": "22A8Qd7oziLK5pnMPVeDaJC9GQpX4gfy9v75ELUNdcu5TrPPoAC7xHsioSFiFpvQLgp4ToaPqERHkjNfU2272YLt",
  "key15": "5k6zEiyTR6UPM3RAcdSf3Br1Aq4gNMcmUyKQosVEYgJjHH6iKoVYJBLdWNCdDmka6VBZtCNJ56BCaq4zPE9qCNtX",
  "key16": "J4waNasGLE9KqJcq1DswmjpBTP6sbW1FKpxwW5bhr6vdQbMyuSzz5ufLzFL5HkJKBZ4NnYgKBTzZRLVnQx64qNu",
  "key17": "LCagdLddgkxb8jHvtunakgKe2r5ZMJDsKVP3hMsgwDVHnaUQp9ULBqNYmKP8w84BeSUJGJ7mUL3TAd89aLdBvYa",
  "key18": "3dGhbc8oEznVBCrkWiQKujEuhCizyVY61FQCzzbPVAyEjT9ALo7fKhna4HV8yBiQrgDypwQqi2JYnmRjms2t26Av",
  "key19": "48QQf8W7DKjAVBK2VAHG6UsyBVzNCaCLUD5Sshga3wPhDdczVTF9mFmjk4Ahm5GEBu84hzCnKvonmp567NENN5XK",
  "key20": "4okz9VVtBYLUCJ7m1w1VKpGRaaR6eFLHXA2NvNUxZDYc1DevzTqZoKzpJMeXS5LPaX7SyYXNYudyvSZBhxopNyo9",
  "key21": "58ba42YB8rp9Qv5WyzmEhcGDLfrDsMxRiYZUuAZqvnHfJd1d4qEZm2zPNwCu1bfWZtstv9iKVKz4nB6JLxFJuBn7",
  "key22": "2rCCqjDrY7UsMHbd7gpPr72rAgcC3fW63XP7BbyAuwPoLzsLMkReoDhMqVvgxJv7PFBonea6WxnqTdrRy4NdQUws",
  "key23": "5n2eaACyhyABtvTAnyiLLzno2mmWpnhzzzhReG9NmqAevUKZdzxcU3gJfKrTfJV8sCiaHWNYeBpeDGPdhmrBM1yF",
  "key24": "3cV6kwiMWYz5aELUKqWLWtDXQr1oaMmAmWMTaJEdRxX9b2QtYX3boyNs5wjUCxmJ53FUbHuQKAaEVEYpexrSb5Np",
  "key25": "4J8kFq27PJCBDxwgQn1zJo9qJPVZaeafWvL8Tih7VvPZkfqkh7kAMamYZE7PovJNVotYSobdcF9EeSBx9XM6ZdEd",
  "key26": "cb81u4boPhtNVGTMw7eJNtPa9ykvW1HE14ECqS5ZHA7okFxWCKQpAsgQ1qAmQYnq8BeURdDs2U5orZ7FUhU5xSp",
  "key27": "49ooLsJhbNG1dr7Csb4pY6DC9rKHCyfko88YvqwWxtqktVYTMtNd579KgFR6154ZeNtDyJN8A9rBvApHrHa2MqdR",
  "key28": "5bjihQdHXqpUmSFrzfwWayYaiJCm8KJ6jNib3V4KLThQwtFgVuhW4EifN2B2f1F1DPNVUULuyL7UoeUJ7fp7kopU",
  "key29": "2Uoy5u3YdnBDew9DPkgRwAT3j5b9TDbZo432YxSdNT1u4DFTTCfeA2rSoP2nufjZ52G2iWHr4Cs2mHpbNr57shwJ",
  "key30": "3jdqPMLjSX7moFeSKRus9MnnQbbZvXCt3mMoPcDdestq1ZNjyFaL7N7LFFPCJUSEPxm9eRhocBoGHjBAkQxzhPaX",
  "key31": "5wPN1xp7hPYDR2yhFfh9epMRbmFhZuNNoaYLiJi7uDBPQob6UwYu6trn4gAHa88ScqNbfDZSonxjtLdCrEoRbQtZ",
  "key32": "3GL6SqCrku2ceoPaZNdCrbSzENyyUmFdZ9gf8VjG2XdZxpfG1GafUJuU978JM3LoAP3YeZ6ZVvRev52Z5eEpTBhv",
  "key33": "2fDpNszs1mgRTVWcSDb3FEjdkBMJ5oYa3AnTBhYY96mWWn9ih9yoWMWhRWTCtZkk6jmZBEJhGmdFnYtpERXXsoMU",
  "key34": "5gM3VPeCyiKAMRpBsrnE2ZdDZTQftc64HposogdN2LjTyPNDZhwExtqBSiFJCitD8w7ZTydfAVWQa4AcJCM9RRVD",
  "key35": "4nzvE7A4w61cYYhCiKPnXTAwqCRSJStuFx5CE37xdjDQMjDGzn9iMm3ADZJp2aJTPac5YRTFtQQxgw6E2T8fUdyS",
  "key36": "5TMkRgqXWEgM6tXaSpNbxq3kNAfHyDSr338eMRD48qUgqagTkYmMuuYEBYEaY7b8MViwAvkACmMBKwezWZtY7Zi8",
  "key37": "4BYwCQJyDaPbPsaEL1NcW6wiTynWHUiurHEUtyYgo13HbTHz9fUi3rw1bZj95vYmrQXizMabqdYFsp5Ti3YneSsv",
  "key38": "2JuW6xKg28A4TGE8wCVvaPpuhQnkkuSJ6B95ssGHPbfp2CoZpot87CvgSPh5KS1Ev8h4zMj2zEc9THE6eAQ3jas2",
  "key39": "DAmCw4ex7Xj11nuT5G4zU4pg7Z1Ur6FZ9DnWEWcNEQxm3eQtuKW7529d4hhXugxPWKQ99BH64o52y1HT8evVkGc",
  "key40": "3TVtXfoxuf6A6amJnwoCG4FcsTDQtMLKVgdH559Ne7yvMeXLqeR1zGjkyw3fVYJhn5sfectrrQSXSm3ovouSd2pZ"
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
