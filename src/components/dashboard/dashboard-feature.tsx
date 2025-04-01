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
    "DULUA6512xa3qha52YwpBPgVaqKaDwckYMH2K4CJCM7wFoUZtxBPxDV4qaHchEKSYvo9C4ZFfBC94ZDjdFXja2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8ND6tsAtkt6tgKyxfkRREwEtuqYgxUqTSVziKAp16LrNFkw86dNXHZ3to1D8AAMZmjGx6N1dyL9cHFKoyUJJSv",
  "key1": "3NQ3aCujWbsdupiLi8D5ABReHPhEgy8b5eBNEAtM6VsXQy16BspeM3Wyk3LRQ3FZFH2gEi4m2hGmST2fKEasBBec",
  "key2": "2cWd5fMjzYYXNLeAetdxfdRCvFUsXFLVCRs65ExadVsA81gkTEMWkVtoDN1kRDtmBdYvqyrbLYEGXQ936NQwdHmw",
  "key3": "24nox44hB4o5waA1cfy8KmxC3AKRphaemJKAahtnmpGa1Pywv1ahvXjnRQ2UBenBnXru7fXJudsAoBHn7W5xe3YD",
  "key4": "4pYAarHeWQceUdrHEep6r7g754rTXwitrgg55Gp7frxHCwkkPWBovAUVEb685LbqnBHc4h1ZCNo9ktHQfPDA1hJp",
  "key5": "5pnojSteMLwCDVtgFSxaAry3zSkPmfGwRGiMQCwzKrSFfNqLnMbvUzzSiwzvBCvXzdzky8Ma3wA38fs43btPRdvm",
  "key6": "3yjjyeA9nsNrvhLNudfPFrJXTAxqqZkP5abHovhHG8548mZTLLagwn5rqv4Y1sFQ4VGZXTggiP5nFVMnbEPCKPzy",
  "key7": "3GSByEs86R97CoB28mRFWg5xXpqYqnM5VjDYKWjACGdsx3SGL1KT9kZzFkkcnrc6FgfkK8xd2jNGFrr8SZUwNskt",
  "key8": "4s4FeNCLxAmjKwbXzewbet8mej5E6YVZxoeTZiSN6NWpTZp7cVqKDRvJiufNB5gU1jiQVdGuNJioQNyNhtcB6NAQ",
  "key9": "4e4stiuom1U7vtm11EkHFrhG4Z2Hd54f2W4hZmspG22hcBjtAeZzx5KnGquWN1wFbwr5ncQZJW6EKdpgNdbR9FLA",
  "key10": "3WZvhGpw4EoJ6K9kZ6JYAPFRRJtjNNsd1pMbCHzWLtAQgZFpNZdF81LXA2u3G3VDoT4m61RCh221AdnFjW8mYdHV",
  "key11": "65anZDpLKzxFZuERszDEdEG4XhN274YUrC3MgT3SmQ2rUWEYrgHBwd4BrisEaGuhNyPUwxC2655RWhJj11evTVaJ",
  "key12": "3CfqkSeJe9Tb4DHsfbMMtGia2MwZAoTXhxzK2tPv8yp2paMFT7uMKoL1evS3NzqANjUpxG2Dguoiio4TE7z93Pu3",
  "key13": "4PF1fnSkBAozJCNqJ58T41ffikfAgYd3nKRoPMc74Exek3owFmdgZP6xrAui2QyexJfjkPY5UFPNsCojqhP3B6DZ",
  "key14": "4bTLGFj7UcdiQWsCVJptzsvV15XVux4zWL1ZfBgEWR7xDCP22YoPjLr3Bzy5Ydmk2JVWfXJ7Nx29N8hDTJiMBN3s",
  "key15": "4PQUQrY1pNqnst5jYohkswTSE89tmu7VwgaoXHxnsrUURnjKZCSc3JXgw7gzECPkXemP7uJDLmCtCCY1PYKAu834",
  "key16": "V9GFMtUhxgADWe6rmuvW63akcEw7sg5YKv5ZXenjpNCXC6QK8SMKhgrxoP4mzQBXvixmCFdVpcnhZWAdZNpiVdP",
  "key17": "3UWgnTc5Vnt4iJTFn5ACT8hn8q9K3CQWPyDQ3AE2Y2FeUemTFhtEwRbWrt2g927AQ4QhR3LK1fkuHQwGJqFkJLQd",
  "key18": "9Veq8zPrJKc9uarJaBFCr6riNEK8iSMG2z9DSMKHg8hQUuSojvyJu6EXWnTSoU2HKSxw8WyyCgKkytwCXAkuqM1",
  "key19": "mcomEvdHLVTAKLvgvKrGMpFASCFEqWsmB8GnfQByPfg5vfNr7FnmWpW9u8RiwNvT7dfEM3JxaiYADpQUY92A5M2",
  "key20": "tQkZLr5xaGkefjBiwv1XvmD97D24rWcXpiSKxJL2jNJo4ui6HVedmtMvDukajgWWjmv6cjaX814BGQUwZctvexZ",
  "key21": "2zyX6jigW19c2Y9t4ZTQcyJyf2EZmH2BsgwBUuw6pTDcw3s9g2xG5LSVsdL1Woiiv6meX38zA3ZW1LQ1AxNmvD7u",
  "key22": "8xLRRJ1ajGLQ2yLsaaYVXktJDSAfHT5sXtE7bEnndYSAAjDsR1xd7tdJJpNKkde4WfP2rrG3tFePcr2JEg3c9hd",
  "key23": "2vpJPDP3ARYaamMLsffPU3dBpE5ybEKTo7XCGHsNbtAikzmGpZTEHFeYSXyzpsGT1Tjq52NcCc4PSCKRQpVdYP2i",
  "key24": "2bFu3VYDuL8M4Gq7DX8HSsakmzc1fPC3LNebdA7TBxRKjMyMGq1N8W3DemKsAsYm3K9ri3kZvuVWMf2Dg7gFet7c",
  "key25": "5RPsidcqdFuNKmi45qUbkyhN8BH1t5Jc884UWoTBubF77cDexRLmcc4xuHEuEGt9JWGU2h4kWBtnpEANhMkGYcE",
  "key26": "2C1BSx546fvZc7zb2jj6WQ1EmWTyVdKuWX9B4UoqZiVUYQoqQJjGUSyAf32k3yYmWPKogQLB3qaHLk2VteT4EWNU",
  "key27": "QvZgs2RhXAHNHfKzEhZwMP3JeWC5YtgHFVVajxHFkBKcUMGNeFcx2cZsp4WfJhj2M8Eig4zmZRBfV1zVnSRMk1z",
  "key28": "5VY4j4j4yot6cbXWpbkWVgreqkHYWzDSHkxYY5JAG6KWbkjgB3jdfRLnfiabMnNgPCSzDoTyAaDrgSMzjMbob1af",
  "key29": "3PopGVV47QDAv82BDjAepRVtiPfGu1cZ4VCj2g6yj2QAeM3ep3H2Qa9qHnA9Jq6Htgrjoqcj4TDvhCduWfC3APPb",
  "key30": "4UbTD3MyHR8TjDxXQbeYTAwGcMtZR2DQESDa3oRfJw76q3qG3vL4KgkHQ4w5C5KbYY7XH3ra2pBpey8LiDags2zP",
  "key31": "WfX6tDdP9k9HpE6JQz73pp2MPGG5KP6rmtJXuAHCP9EruSx8trwZUAjWmgT2QCqtHfRpBKhnrm6vSQHWfRYUjFC",
  "key32": "5sEauVZUMudf9aDEFTSL3tdHZybaaxQgkByGqCF4CKcn8FnpmY7BkBUhLjeZbMQmUPbFJ1UxVjU9h6Wr4v9Au8b1",
  "key33": "5vyqa9Zwypp3NMv1ZALDhxokddvcNZRpr1vqxDqCJNnJ4whmRhJDuBR8yEBWYRTwNVqesWUaCsBqRhGnoHXHcgUT",
  "key34": "3r5dJUjwVLHayNku39kVm9k4r6Ld2Pw2vtWQbj7uP2FaYLqjGKkoui7DTVCXMVuGwuBwwE5nVQ84M8peWDiFmWby",
  "key35": "5MX15BX8HpR59cPTtLB4bH2jkGK6k9pD2JtKMXAcMBgLxv1umHSTqVrKdUqY4XSPHhn7UHsqTsAtJTn2tbjhk5aN",
  "key36": "9dU73JtNVjxVmW9MttZSH2oxxakygohty5SaQH9HX7SHKsTdntgTxSRBsyoUHU5H5wH8sdRymUvRKmCqedsjJft",
  "key37": "3Jgy8TyzAVTQ6k4zBALs8UKsm2LN7ZgiHg6ruA79MPHW9gfYkKb1gWKRTPBhkWbAY2eqwtexLUbc4r6keDGM7yhe",
  "key38": "3ih3GekjHbsNXbxULKBSaorD2MTQtWDXBXtxNedoeRgAnQPXeMHDFWNY2Y2WJ4YeCFye4Af1HYCJxVyJQg9jpHA",
  "key39": "5D1YmaKXdfzBWEzhuyU8Kx1EQ34W4rMvY1mgRvmdgYU3rkFFC7US2PKgL3WnKW3cNe6zKvbYXnpssoZUnv7hLwt3",
  "key40": "TNtmBJWP2M4vbj3nSMGNPuf9jCVRcMjsGCr2W4YbL7fqycUrrgmAxtpjNmdBMagwhhUpddQejbU6Udp2kHbUAA9",
  "key41": "5oQCNjyZ6DhMZiq2dvQpKimPbotxHeLbqCVvxZoUKV8B8WJevsM7k2yKGjD5HKAswvRjdurJYFUwqzkMZ2LAFgra"
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
