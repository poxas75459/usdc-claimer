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
    "2TQgzigBeuuSoKiU9GKi8s3JzEn7THZDJGsWcyMh8jZ9niFEAsQFie2eiU68k9GipMcxrtwCNNrMPfw2MpvdKDGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTfjNrrZrhKyqgjwAeUNgVkKtC1PkAnCUh3SM8nq2SzqguPvSYy4S8NePiKWUa8BvJZ54MJLnkH4HsaUsw5wtpC",
  "key1": "4kkpHKPDV3pF716VGLgyMBindysX3GjU9iBT6i5nybzpEBHDcQkCyC6jT8SbZGKQhzJaM3svt3QR3md9bcLF43nJ",
  "key2": "4uUmEVYJAckyNocsSHzkkZzmKvaKZUfpovdToM7tQRDCj7CfPsJ1bmaBAGhf1ADMSQ4YmhonknC2y2wz9jgReyba",
  "key3": "4vUNCXZVN8BfM9vPJbYb9GunExF8nfGSuc3XK3n77h8hdkZEoZnnER8hxKmV4WzYhwveQUyL61beJt6dG5F4jS23",
  "key4": "3hny8gQ2sR3ykzrhh5YFSFMG3s5qDHLNPqteQfkBWXfmB1xQ9FCP4KJjiswhmsaYQBgkNMXKAykYCSTGR9WoSkxJ",
  "key5": "vyRSD3W3CKA4bRFABDf2YDk3E7FPU16z9kZftG9MDKAcpPE2NQCu1SbgrXNitwnzHmHyUDwVeU3ZA5pg5fQHoct",
  "key6": "5fzrWwxj9TqxvhcgKqZaqUykNQHb6atFU7LTLfTDjaHN73uGFfmafb7rGyoL4Qo2TDmkxF4Ee3ynaGc5hetsdGk",
  "key7": "pKTK6QyLhCk3T8y8radmQf8Z41f5MBEKthY4RB7vbSnKwbZiuxfDAEASVf6bHEVepFQ2s9durBHZ5wYBhQixu88",
  "key8": "42s2i8byLV6JA4gAzhjNAfgeTgyf9VMSzd6MmttsEUbKsJNpGGKNLhDYebn99LA9ZBv41tFM4itJ2UbAdHJV1DAR",
  "key9": "2LMUwegKn2jLznSDinrdqVTVahRYd54L1YXtXFmSVpWuLgPiBjMe146H3dnQDJqs7aDxthAacwSwYNFJhzYgDqoj",
  "key10": "3W3JkNDkWhnZiD6SfDBfmjbjqhcpJZeeLJzkqLRm5G8VN2njQzCCYQDNcJ9VBHfazBYNKp93HCBsGVg293Qy99xx",
  "key11": "4w2RqodX68EroeWrEhxsDBKkn9NnUUa3vuAyWkRxz4CDfZGVuk7aJtUzJKRBqKMkoJM6X587RPRJH6kZZr7rY7a3",
  "key12": "b9NnPaeFGuj8nfx2MhxAGAy18Uq2wXU71zTxFkZg7oPrN5jR1yyjySphNqbVShxsSQ4UYk3Sz8HXH6iHPtnsc2J",
  "key13": "2sSthGpyx2hWTAzY6MitwqQhBCFmt7mKN95ar47EigpLqFewWc9mhMLKpVnhgJRUqEiapnuJkewhwFrN9fZtGW6m",
  "key14": "2TgNe7bxaJENdzVhNb4TsjHakQy4PEUvyS711qWVavmMrBsDLhbwiWrpuPRZHRQ4rkEqQCaYh75c3jx6vMy2r59V",
  "key15": "Gp9vjra9mYnoWD3mgEoX7LYBW9inHfTsdVJ8Q5x5h6W3cS8LLHhHuQJkmEAmmNABrj8KgdSDmkBM52thUbREqDV",
  "key16": "2mQjkJLYNW6LxkJr12jFEJUHLz5kihCvMP2tn8BUpTVY6oLjXrhfwPQ6pxoRwhRe4shto1ZdbhTTkbebRoodJeiK",
  "key17": "TVncRXJ6fmFqySKb2djxygS29fmF9bFfZv6wRerts5FntQsaN5DxrxRYisJQgVTwpDcVcXoaauTcSoX5otNQX6x",
  "key18": "2qQgKqNvcvApwZ8iP1qTLYbqs7kgYKogbCCoGKoQJiTVdaU1Zh7ECxqxbKT3ErQVMHmKtPq4Eybvkwga3f52sy6d",
  "key19": "4bM2Q7DcXRUDqLaT6P8DUVq83EgA6sYzjggPKyKKx8CZff6awwnTJq32oN7LQKNjXCRJ8pQcXZnShKR3ewivfH7b",
  "key20": "4RWM2rPK4P4vVjKWugd63jT4Hs3kerystGdX3EXLt5foAAjfygzff6q4naKEhEHkDbiTF91Z36tbheLygrPYsiHb",
  "key21": "4wJ2u3dvqMzRyJqF2VcfincEp2i6HgVaGVhr296vSbkDAP36gDuZPFJ91VU7oxU8LtTtCEx7Qpsowx3zPPVrDQhS",
  "key22": "YSVDYDQWgQNoeFaD7W77fcNC7bVSWYzQ89FuBbg8R6T26mjiHen2eaPMAc1YoAVC1jzLLAUG5EkeLTPwVaS8qCc",
  "key23": "5Kqtag7LFRbTy6vdPNp41gSVsd47cWMh2NxppReapi9XaqLrbBwf55FFNdTypaLag7LU8XJtjBZmk8nXRTPdJzFo",
  "key24": "5LEM7u6DGxVoePowuJTQ9atkyE13LCwa4YTdfKyA8gLFZsPWe6iAB2MnLKU49sLc7XMiDbGpfSQGEx4WWHkmSDYf",
  "key25": "2K75tLqfg1iH3TvoV1ZnJW1sai629BTTXsr5Tw8uPCPt6oRfu7vY9iDnsUym54vk1YiY5uY5btwiLicMcHXz7wuK",
  "key26": "2wu6iHN9BNPhUgVvZXRPg4rxgggo5KiJcmLzhM3d99itFvEzMyMsmW3xheQBdeBZECL7s8SxrkK4cj3gJnGNeyCf",
  "key27": "39mCA2WhH4xLf9MnC4PyCdG7Fj4tRfsuYFPRb63dad3B8usVCUfyRJgSGXsig34Q571j8gMjadbBVm6VeHpk6GQx",
  "key28": "5ewmGtN1Uan6rTfWinuYjkZbJjb2vBoFv91D6GF7YbNLAxipY3rqZuMyD4r5psNCaYLCYeJeq8ZvUEVJeRcyBoXk",
  "key29": "3goF5f69NYq6YdocShFnST4cQejSBEAvSjxaBrVTGvibR5sE7nFgfLDeiJ2HNz12ZfSTCU6XSmqPV4khzQeqkDZM",
  "key30": "5husu3yAHMVNsDaKisFKvWfXYkbRtuxTYkSoHNbDHTwQRzwGBPmz9KdrUPoQLKe2ihFEyNvQFTv5NMrDpbj4bLjW",
  "key31": "5m8vPGhYi4Q1b4ACkjLHstAnX3p4PvVGWbCvGyLTBGfQ762WKVLnc1kKxQTBX99vW4uHx32v8SCjpGLKrMd1QY5S",
  "key32": "2MBxyfrofcr6F2ZPT52ZRnbJ87o3wVtBiZF185akGBu4W4sJxudD3EbhSGyzshmKfbLJMs67Bvye8MMo7QozwCay"
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
