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
    "54nccTTmSPZWJ9pTLc43sd9T6fCMQaqyypsfF9Twm63xqKYEyV3s4ZKwAevf1ebqHV4VSCHSoZpVFLGnT5LxMBMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVHAjHSaHpJtuvovBjCjHYWEFdpGN45bwfx3n7moB8pbjmiU1yxfueeSUgb3d5rv8KirffpEXQDfTUrFRKHWNWy",
  "key1": "Cr3RshaCVo4UPEDMab8yscLgeXt7epheVeni2dmGVq7xwii1bJi6B2XbvSYESQrCRH7fyR1nSvfNN3DHMFGUhxM",
  "key2": "31n6w325QXUVhJbHzxx1n7RBiChC3hkWkvaZQ1NpRvf3DT6u91EQ4XRiJjXXF5rMBdfCQcEfuq4rJcQXYAQQdrda",
  "key3": "4UtQFpBDFYLHj5YUX29YvMyo2JcoUSLLiqNjijyE3PbLwpbPAt4mZ3H5Gifqo25NtsBKdTFTLCZAjA2ED1hXJ8MS",
  "key4": "4YdJAW8HjrMpWkXqx5vaGWYJthU4UKjXwnoxKJc3xLDYbsuYDJV8HqvXrkck2viFym9dEU9vqPpFdkBKfEMwYFBi",
  "key5": "5V4pD1uqJU9iVSrwsJPZhdoUYh1mMYujerSLzktBWgrz4KGcbmQaqAKrySbmYjYtto8dTo7d4LE87fgugWFiLXs9",
  "key6": "2eszt5ttFj8yniJ5DswnD1PnqLBKEYAwtGuv3kJessk1JCjWFqqJ79gkaWX9vW6evUFaE93LtDXjsF5DsRBbWwGr",
  "key7": "5vmHCmNgrhdoM8b6c8PaiGHeQJnaoiLKrghtaTh58x2LpDTKvLp2yHPFD5M6XzKssZDQkCSdwEHmX26uGXjQdTG2",
  "key8": "keLze7oW6yUAvLUfZ7JFNViSgQMCmHnxFTSQNxPqyzRXXWbhisY4u7xdkqkWN6jHN7JdbXqEabk1xLbBZszGm81",
  "key9": "3d2BiPvoUVdAw9o5AQPKZGaEHhnC6Uycs7EqfRazEkVCnXdgMgho35LjgcWBUdx44D7Ufy7HejY9WKwFVzCCDYRv",
  "key10": "3akKo41ELEvo984soFd7b64WyEZJttwb6qUtF2BamnjSeTbfp6ULm4N2dZvVFLccED7vVb11P4GvnFQwbyXCRFpu",
  "key11": "3SN5eK9ARrVZHvg9b1odPKCjL9bRPj4BkG8Q5nNrkSWdzPGx3MujeoxpTBbx8wPmGpTFHUVkrYspECFH7znTSsK7",
  "key12": "2EsyKSBAbEedz1A3Jocrd53aqkLhNMYTWcH8pu12gUMeSBn5Hjf2BBV9vstm7q6t5AH9bg3Z17zeGuuT2exxSPsj",
  "key13": "2M19MHYkVABsUo3SZ8Y7sbcDD7aC8MroADAe6mT9wnbQhTCmUZUUnERqw9ZgnMVEu6kjhUvYLTZXNSyD4fqjXnn",
  "key14": "4GaWYAWvMzf2dj8CQBZEattrtURFSKNvm1inGTfUMKHtgk33bx3CNh6Nu3Wxq8jPPz3A7Xdcgbh8oXiMJi1Ze2e6",
  "key15": "2iKWEcbmDMev6wnWTiE8RetyMwAQxa3zqcQbaAKDwoxCc8UvGH697EtcbD2yK2UoYAxpvTqt7SQj2wMSf8MucUip",
  "key16": "5Yq7QPPbwzW1JegRv5ch98hQWZUQN2HdPyYB1jjtVUaygD8AAaWFiPDwekHN3dF2R2rfNSrZ1BrLERUTANFyZueY",
  "key17": "U7ucXhw3fSZAnwuS65nVKah6RuqKpPeo6grv7AfJMdCWF5QRsZpgLd5ePWHMoPLSbq7BVPFvHLDkXYyG3Bssz8o",
  "key18": "4Uqb2EEVkbTpXiyHXjh6hzZNAX8QZxS9HHGNhSsW7kHZy44furcL9C5XJPLEHpd8QnXL63MmJAWjAsYRCKiFfxHz",
  "key19": "2Zu5ZF9taKULmj6VyKk1Y5cWkPSPnhUnTB24gU7peLaoWCgeLQYfpEX25JNM6dLCQNmGQ2MJsSAssyPqZTj7ZPwR",
  "key20": "3NXmj4aQANPcyEQPGSfP9Qtzdf4LgHroS7keP282Lr9b2PwcfqzcjHTbMnU82X2shCJXEQEz4GpBxtLawETn4qRG",
  "key21": "45sXvH4ExHeW2zLn8Kn6rDNgpnibgaXR87W8bxSWnfWm1AD6vrwaciG45cnCMcB5cAkyByprnoq4Pchm8maVSPKw",
  "key22": "3dcf4t271Jwnxup6yQSnkk1v4weXuU6rD2wV6kzrsio6HoWCsa4RnNKrEd4PUPBShjPcHAhWVtDveLqZafhMp3TP",
  "key23": "3UXsMqEDbBfo2ikMLgVYGEYkGA3BDcKtBJeYHcYHyM4LjYpyVBNvKTgnu3kaRMRFXE7AFnDTkQz7SkDQf5uSNvPq",
  "key24": "589on9JVhkrS8Tij8so8Ki16g8pEEEGp7QwVUW1muuN8yMGtMHu7WLqdAcTsbn2Z4KccmiGptZMP9o1rQZGfCkdf",
  "key25": "5ScPUsMabLRrYpP2HcaxQkjqRtGfGukqy5q8kMF9jMKtRS229BcTFMd1CLNofvMxiYvqa4sPgNeYCGdFakoWdJ73",
  "key26": "4nczSYTYcPcq1pwMHgwKUKHVS6mpTeN73DocVUrsJf6eYiytQMP7HbtCrzR3NzhfL6FUBqyiSqToxGqpP6RPycsL",
  "key27": "5dx65XyLfNKxRcVVjKf8cE1pognKrHkV1AnPd4uTbnzLMTitB4KEHwyy5wYSNAYsd6iaK5Gbimvr3L4Zk5VcuSas",
  "key28": "3kzqAuZU1Bkw7ASQ2gFbC8najFWKArL3FVLhDXcW8xMUnLMUfrBDEe3yzx384Rmm6omWaBNWusmR759736Es4PzX",
  "key29": "27Y7pT3fsbBqcQq4ogomYzvwG8EAJRJui81iU6vXDBM3vDUiEW3n9atQ7hGi2LDqXnfnyqUvC7Uxu1uPMPW72Rhx",
  "key30": "5mhZQrEfkHW1kvRTCXdGsStq1QNoL4VyQJLQaxL9cWjCgQUSVEJZeFJrWp4PR4nDLT8q67Z3qwV6XdEpT6vjCsX9",
  "key31": "3cNRSk5RzWWeNLEUpXkp6NV9RX1T3nCp8c7RcbSykETJBvxhQsiYV3Dtcn2iFa1sCjhW8Bz7bFBrW2k2mPebGRa2",
  "key32": "3vYN9nxeUtBqREcJwfqtQuStZKBjZuCpfXHBsdBE8t2QjwHmCjv5ufpF8APenhAMh3Xvrvn6tKNxbgujLKXcgfR7",
  "key33": "3UwLDnSYeZn2vreLRcwbc1ciy7h16uhb1xFG64u9T49CAudBv11GhdEjMY9UMQ6fpsg9nLnqMcxx71p782xUVSp1",
  "key34": "5ytaDLjHvtgM45d2caXPhLNancmytA5j2SktLksKBrDA7sSMuBzxysRfkiaef2eryaxrvH7w69roeiATQVMkC63U",
  "key35": "3H6pXzwaXkA3e7awGheDGvvPNDeH4FPQw7f16XAmzGmauVxi3WU62D69xof2FkfkfhrqavZUGAQWiyq8k8kMu2M2"
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
