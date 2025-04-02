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
    "3kawZZhfdtQBUyqHEsBfN6X87YSn69yBLVDcdhhkLMnBoQwUtihzjL2Nxj7TXAvJBKqa6EYjPxqb56hTMDbWiXgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJzi6x5paNWRcSVsvomiDuPqsse9sXrjxRSTHaqXTr9aHKyGvXzHExkh2W8ZbH2XsRNgKUoW6hQQ4PkjV6JPj5s",
  "key1": "4hAf53SgkuvHap3TR7GtG8NmUNL5J2QnmSVJp8M7S2QqM9jDuoY3emQQNEg5MsbEFHPsUWNddgqoFAw6xkQYkoDs",
  "key2": "41rdCZGfeNJ8fFwuQSiwC6uJih6Fzm68ji7cegM1ZWqKDAUwYL7CNSaA6UeZpqvTyxnRZpAp1xaSNTuHfxcq66qa",
  "key3": "Dnr7RsVttPCPa4b2LyLcCwaHULY8jYRCYHYSNWiW8CbLmB6jejy8JCLYuhdGGvaWQSYeBcLFaQ85vvc7r62Jxib",
  "key4": "wJg1Rh6R8g9VtV7m1ti4t7iFih6gQ3ygUxVqcrzktDqDTXkj4vtWKFgJkwfZYP9uV1STDCfTm6eHek1zMLCWpB4",
  "key5": "37mQsGpsc23ZjZmVZ8NWyddUPMcYyyeBUoyrYGVicp4hvvGiEC4K3KYipCAoXTsu1TLbQc1PpfFX8yTeqmCPPNMu",
  "key6": "2o1pfxo73QoXGtmTpBq7WtGvTHU377fS5j1prJbzTJUpkpRcmnX1AdKMoki8tzgZ53TZNfmbM9QkSZqRxKgPVvzi",
  "key7": "2LCKQB1VbFbqg58onE37iuxW8voVfySubkXaduQ1DxFjGs98CbTV3aY2pwRDHuRKUBdEmoME5edjudoWqVj6QNk7",
  "key8": "BUACduHNTyGhRcLArseY1neDVy9G6QDm3SRokKVmGAJnTbndNjCvxiNvQCUkryPiEkW5kDvcHPYZjs2mAkNnpEn",
  "key9": "4DGG4s3H7UQaEAi88rFKV3xQia3nr9PmE1jFHNKUuMFBH5CPCpDxBcSMVQkMXqhABxqzqxGXAjNxhfNWvgTcCBAp",
  "key10": "56gZEdQwZezzzXvcTcefFmB344wd74DoMepwn7gDV8p8nLBx2HUdTREZ4iEM8g2qXb1JSQmx7t3Qg3EeuSYXZTWV",
  "key11": "3UEkv2xYYZ3TkuLpWFbT1tH2E5uDQi2P3aSpCmyhhA4uqSqWT27cqUSzAMZAmSTqffmdrJKdobStwVQUEK55tsJX",
  "key12": "4HvQpbTSrAQpqsMUmoKRTRgarggGg9Nav1KEtgmBynPTQP74xxSEkHZTaDpgFsWztGNzR3fGr2beUAtXWBYrxH3v",
  "key13": "4CJcxT9Qw8iJirT96LZZ7zphVLNDQMNPPDz8QmU1YeEaHViPqMkKUhHneXgmGwnB6kSC7VDEEGK42D5QYF72n9jA",
  "key14": "5uYwfMg28fiNi2oPipsp35xDgXfhR5pxhHEoGQ9KjzrFKrde7Rjt2UT3zTVourr2iso45yuc6oHtKxaxFdipDisK",
  "key15": "4hij24iAFQHb57Y5MdF9QFrEdPWxtfCaExQDNBPFTBrDMBDmefXUgciPcBsbswFmi2naqGYRw2BrnM3AXKWLbB3o",
  "key16": "4tEAX8WSAu4PN3AmVyzj3mFn9QyaLgr9c9bYvYhcxWQQWhrvLWZsZYmb9FwqTvJbr9VsusS4XTj1uS3a9XBLW4dC",
  "key17": "55VocUT6HXQPsQRHstSbZDfPhE2r6HadgPiVHzSPt9KfQAgtCFks3TdyXtScojHqnXLQmTmhcGFzvG94fBC1hqJD",
  "key18": "5wsXokyGpVd1VguCLC9frqb1ynRCjrxUzUruAMCt79PVbcfAKWzZtVkfStHQZY4CFjLrYC61PW8ewJbSfvAkZpSG",
  "key19": "3B3BwKq7APqM6CJdi1DhFw4bxCQLjBJst7ixVJxBRBPrdF1sxVRVYF5Zg6CBjSBrm8sSwR7hs8scJdRaxkWpF6Kg",
  "key20": "6iSPnSSgVhxWuAssx9dFT4ahZtHVNyARvadUaxX8G2cDXPh2iko8XsAEeZuQeBQePeWiZvYHRpsnqqzBfczgF8a",
  "key21": "5aNFQYpkdhKBJKQWKBScWfxwY4AvdXnoLu7pdDWk6DKGsCVnCcJQThYLKjEaqWCW83Jqf9XPnskWpFKhTdxNwRHH",
  "key22": "556qWkqSV8ysmny2yxJBcrSwdUWmDJUpLsnvMy1TAhsNg4kTzXxH4Gt1bow6K71iuvMtL1eRE6oUtkW6zhY5566y",
  "key23": "4xmYqEn4X3zr63k3M82J7j9z51NDHBESA9i6rwsb3ho1wwLk5MfsTtUQYptNiyRZEYvCtg4GwcjEXwVyv5B5surY",
  "key24": "2Svo6ni7J28hvx5UNksY8znoodbYMvbXADfSHqGEmxiuNETDbnUo7cvq8zCfHSJ1RfHfV2SJombYokjxEinL2WQm",
  "key25": "3fXt5B61JtXbioFbkFzborVdBP9nTwd7HKSk1rwvGNhKznKaRtCgVR67Lo1pcLPk33pv8HKrWP2dZ88YbKoG1S9F",
  "key26": "bLgsnwDPjtxMog9opcKXgdTMSKzqxFx1p3YX1Me5N4kDVykhau7VTsSynF97BZ6VYNMskFUV2T2PcQ2XQfSoyRE",
  "key27": "3TYDbkuHGcsHDka6iGMfmXhhD7qkcFXMCRUmvX7e7fBXVmN9AYzuPTCTN6Mjt7ff1VLtJJLqxZLY4G7oYzwDavJa",
  "key28": "5tNxKNmrnKGNP8uchoZC5eyMg88NTzDD3Pjh85uaPcHaZiwnbWEs9zUjFVmcHqjhgTsNTDT2p9tUY6GVpnLrgcbj",
  "key29": "47r6oSt8qwhmGtnys2WFfP3iKdZs1HM56Mnmkvfkbf59aNJUFPMdkPVHW3MGeh4u5XZsvtXgcooPKg9PV38ZSULM",
  "key30": "aPLvg2w3NdrHJJeshqpJ2bvePLa194Vivk1uR3phYUUWLfNAtQU3iSv9gnRLRoz8Z5jrxWtzccnHF7G8xEYtcNm",
  "key31": "4qpTvEA6QubYqPsD7Hhjn1P2U5sezEQPyeCwvi2Ys4zMW2ydk8moTNbh85viVAjE4HEke1mADLa8wGw3hK7Ej9kw",
  "key32": "3bp2buCfPUHDDdVDUze7WYi2XL4ANj3yVtooqQ5FBaEdf4FQitdAkJnQiaRZBMEyo1qV9kDNFkGrq7NWZ6EMVaQa"
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
