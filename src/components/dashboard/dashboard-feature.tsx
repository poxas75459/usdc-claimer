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
    "5ZVF64ZAWBVct9gDPVGsDrmMtWvR5fPgWVsektMQeAFyk5f6BFEWJtXbGPDKjJG3EbYXxf627k2SdAk64ptAy1ZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j76ATAqvZMbts8vj9NbSCxe4TAAFoRb15PdfUYb7KCKTKpaH7SYLRpsn84VYYjiPhpe16eGDLgnFB4X2rW6TDve",
  "key1": "3WamJfC3ovMtbdLDNPUavcqesj4smbTFQsEQZaxRzGaM8speJc28pXCWtkinXibzfAMbEJKSurGVvJvWtqCqfZCx",
  "key2": "3498mUP2iahYaHNyubeD4fn8sQZgiq1XJ9EshL2Qu12ZPWkN7uz25mRQ49sti5V59pTb4jbwoyc75bFbwQGNs2qx",
  "key3": "4pvk8MHzD8HMxSQqWqGVMyvKkrUYEhsja97NEApfTpmK5DxthhkBfeHf3EFipj68MuXdeCxZCst4EPbtT4nWKazx",
  "key4": "3mf6uUXqMPPY67S8fe1Fb9eQZ6XJb4bzY55LeLJmGtkX6zsBFQZUZ2snGUJHenyMiJsUkWmGxrg2XoQjLR15uyvm",
  "key5": "2HbtfzQojH5HnY5jV8Yccoh9rR9NxCu5EzmyZhJjwbV3r4fCLS8wS4FreAkxRjbK53nkqUdWEP1cRpVEvsmTfbwH",
  "key6": "5EMAp6ZpzvKyWraXdkzTJKq7darCYd4C5dtQ4jJZXaqd4XRGT1dt9BrrMgAeR6vgK8Rv9wfoApRyzyavGHvENHkN",
  "key7": "2xRSP8pSwWaAHAgirzkEYTxem298W4r9DPrh4c433izqKFmwWnpeVTUcnNJfgWaaa8hzY4AHUrW5HchDkavb1Ypb",
  "key8": "7kv8b9JcsV361N4SkYAt5KJaYp3aMHr4KZp4Zm2xAxxQVsLd9BsfXicq9R5LVM1E4ttZddZxhM4tCMK5JhzDMKY",
  "key9": "jXFv2pAvRzdqDMoRFutE66mADyQbDWsapMG4ax2GxdHpyeeoxsx7Z24HhTNVNH1TEZEkynFeBb7D5rwTv3kDkFN",
  "key10": "5t9mAAMf4TkGBQVMUvmLRAu4PQFaQrNxUSm3Zh23xEdR7hajNpXxKp4EQpwk7kFGfKWDFVBf2vfvrjLUQVanV2iu",
  "key11": "54wFz6nY4xaVzxptyUMtYigJ8U3ZXa2J5yGZPFGBMYFYBNaJguwmd1ro3v5X9wfXSWzhFHtcDPdhnc49db6dtWnE",
  "key12": "43D8VE32GvfEtvbDEzRvHhRnhsURcLAivt3a7XDCugfVFsPqA9Dwyeb3YrLrqY5yN4bEGoERki1X7N5g22MEyvZS",
  "key13": "24s5NneribP71MhckExEh8AyaZUttDr8aEgvWDRrzTJfJ5B5rN1QPfEAsGQu9XrMGAsrnYP561xTbo3AzjntHZjT",
  "key14": "T6KFWCc4t8C7mouQt1H3vWVs6AtPNQsrr437HvazMKMCNSmJ4nQNV7pRhj7s5Y1x1ER2r67HfbizrZ1hb6FwuFf",
  "key15": "5pYRFcwmuey4UD3cpyZHJnZEmsst11t6qthdnDYwBfmwWGJR1mN1TAT95jyC8Fy5YfoY9AEY9HjnP9eEdVKcyKRX",
  "key16": "2FqpeDRfKxxuF9BTT4Tfr3LUD9JrN7cAf6kJFTzgWUpKdKm6r5LbUCeCCWQgb1LNxAKQuPVtjdrtgS2Z1ynpvZgt",
  "key17": "5tRxaNdEFDJs3ZqvJc5HPtiqEWpmwNSBMugYXqKzpQPAjP95Eg23pynnHNS8wvGPWL5gFP5AnSbFhqaTCmLtchtC",
  "key18": "XFX4dApfpDLGya1o1MxyCfv3fn44sZTmimBxVhPj3AefPgu8bKiHQkVAUuFsMUkZeDzxa6U64L5ysRfYg1qzp9h",
  "key19": "2KFWTUdG9yTVNhvCjsVoWtNL1bcPnU1tNrH5otXS7ikS5BsUhmjP5P5VBuD9pnDKMSJWQGtytHYfpNtp1wTixP6L",
  "key20": "2zo2rtYGXFBmGXcYCVPDX9h6EWNkNNSF7kNVJ4eqe95FUSD6cauEKoVgHqfPBJoSSneRBPSk7uFBpsL2sYpSD6rf",
  "key21": "51EHxXkdxmYYNz9DVp3QZeKMHxAQry87V5M5rH2uAnbKfriP9eWS3erN94tuCUqZBnyyxoQiYHA8VfXds6Mrbs1s",
  "key22": "3U28gvk4SapPEGBA1wBXMu1QDBy5hDbAL39EenjAP8X1XEHDF9dZvkRsHVdMcYc17yRcZkxCHWoLonT5wMikz1yU",
  "key23": "PsiBSfmFWnHP7TfadKguuGWQaxYAPU2vrxnkHCsaP5ASxGmnsnFFMp2HrN5LPUfQkkUuop3WBefmBJUKbg6zN3x",
  "key24": "Qe9U5fLWxXukzGzYMWsswFgDe7krkVaBAqKncsN67Ai2KLCaqbQ7331cGssetVGcLURPm9GEPmYVBcHNvELSwqE",
  "key25": "pKZoXeEFiMjMReuhLA1vDniveBvx5amGhEv1vP4VT2ena4KRWBUycXHPWpnazNPWRm22iDcL5SsUt8PV2RSU1k6",
  "key26": "5tG7hzsoeDJCR2qTbEDAQA7vNM15mkQbG4r4D5SjKYEw9NPRQNcJoUFsQmhjfmbBi4BASro1z7wxv5R6uFcgmHKx",
  "key27": "4aYFUyPi5jzxaDMYC8RW4FNRjsPiqA1WWrWcaPY7waSRUqYQ9mL3yHPwEBqscFLRbrdVSnC6zdu52KTkZSETsFc7",
  "key28": "atBgCfcj1JxZbU7urLuesELL16XFBh1g11r4vpMxhDGSPdMqHsQNEpLwwkset8hP22ZkNdLubVFbap56amFCd6C",
  "key29": "41sV28EbtJAqjYvjDX6Tt3JHMuDDNdp8xfmUw8RaApnBeb4iSNQZB5i4hzWsBjuVoSa2fD1g71JadUYRUc9SjyfM",
  "key30": "67FkkRzTchsF1fV8AtsV4xQnYgLbKC3DyQqqVkeRE2UidCRQ77StVzg1YXpb7JNQmduagAiM2HTSyC3pd7E7RGzH",
  "key31": "Rx2euWCrgxtMjGb638LrhafpX7imr3XJCaaT5pGbJiJtDPUnaRfqFPMmZ4n43pBceWc2rBzh5n4cPzjWLLBYNfr",
  "key32": "4f18MYWeadtjDMjpNndniDy4EZ8Z6yfc1fVrSHyxAQDynCiUvTiXDCMimHJpsVmkva3Z7XanFaaaEtxhixwisKpJ"
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
