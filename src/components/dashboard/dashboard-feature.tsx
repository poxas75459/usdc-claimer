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
    "2rXu2GxvKefcuzb1QYzAqfbgVARQ4sWbdxHaVyVRHs4sii8vWyY5Cz159aM2T1XWTDeTLUSTwvHaJLDpJxtvoznk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jrnfT9qyP7PurWeuKS4soebabdRVvTWujsYqcRtZ9LXf6JAYbdggprakRVUNUkj3pY1MgvjM73VqrqUjFjUbCP5",
  "key1": "2UJzkbEEuGZuYqrEXJJ9fRSG2bjziK9fHosd6zNCobkUAfp1rFsW9AEfTaLZQ2GrrJgTFLWM6SMHZ4JnQH8L79EG",
  "key2": "48zo4qYkLXQMCSLPiCy82vS9Tmp8BB1Aq6ekVDCKiNZhQypg3edEzxJ5q9YegHrt7nic11AoSknAhXnW2Xe2qQ11",
  "key3": "4kR4PcWRDkU1CqgU73XoTAxMf5MuvYPvZh3BSzF3d4ata3FGa9V8Qrq6rb4YDSVW15C8KVkEDkgUgW5ke3Gpfqz7",
  "key4": "2fgqT274qTKRwd2xuZW38yauW7yNCbFR94t1ebGVPwcCEnWBHTxgWFwneNs8fnmAEq6YSxdjWo7Xm71nCw4eLYfu",
  "key5": "48u8Dm8D3pDQu76xLJcfUvTMZJV1RLA4ZkLeb3yydFrHMx12E3hzTLeC6Xz2A7FSsPR9cfGiDjjiSE75oSvHmqSU",
  "key6": "ivErfYB9kHWmVpNEnwL9wbFWYovxSemmxzz7emXsUgL9suSsuivXH6zA4vdtqggP9RN5zvtRfUMqzpsYSdxgALo",
  "key7": "4pTp3t3HZ4uFcRe3XNFeFhewEfsow5kgXfvd9XXN1biGAMkzNJoWo5nfi6PSRLjvvXSwqYXQ18krGQtUUYvFo3p3",
  "key8": "2pzBqg6z6RNpPqs7Xfgo1bpfmDYMu9a5v5YgsCWuGSsxaKpjzmdBTDWzSSZTGdp3oepFuXSJR65yzbvToyuK3bcn",
  "key9": "3CHfrW3geMUgcESFGguat35R6gzGMEPAgVvR3Etv9qRx2Xg4SFk2buFhwkAgCZ74jk9yrGrbmLePQHTTjRRU1Zh5",
  "key10": "ub6B8pe4VmGEQA95pp7EPQ9P1WzfNdd4KSDXhLFGgQ1mjghZyVVp2yREbEKyXL5hEA2Ur3SrzkjK8TCPodBwyoQ",
  "key11": "4Vu5zsWt6vVvqj99Zra9k5smjyqTuy3tVd311ZiAqzEVW86fzLLHfju6ST9GXoYAeJNsC1v7js7CMwTfDGs61uGE",
  "key12": "2qWgvuzbDsmfajegzFHzgi3h6hcMvr8WFFUf2BzxBjrG89S1hCEGLqWt4sFTLoiBZxG5KT3u15UdEXuZFbjuUkt2",
  "key13": "3MRQTJkMZfzpzupVZFvFyyUbBha3kNWPHYKsxSqM5h2JBQUW18dCz62iYdMcYcMx2nXDm1aLPm5M7tgSLAqAZ2Hj",
  "key14": "2hYjDVada7gqUXVSdujef2Ngq8S5APFAifkJWBH7Uwr7Pm38YDFD17Axa3Fqj1B1J9GzgYiZHpvpbsyixzdc24hA",
  "key15": "3crkAsQUpnRfw8CDypzkecgVjGGM7NJ9WqpCyuEqGY73QJ9BejJMnLXihSipECtsCJqBSzU9WJUMPf3eZsxBzxv4",
  "key16": "2CMJAdpKuvDTR7t9TzPDFCemo327JHHR1JDxkBzfKkZkBsAf399o691QuRtYMweFkdE9NHeVF7LJAGtpJEsVNvFs",
  "key17": "3NGwNhqxdVYiSfH2EpihU5no4pj6A8YDDfbVbpj42AopBLkt12oydpM461MoBeziADFUGEoEdHUYA3AxgkpX4MRS",
  "key18": "36WdZY9PQqX6LxMnD7VguyVusWkyFJ87oCgUZLnVgVrrR77Myi8Ryq44b353sizbVbXSPBZkCxcoHgH71A5vtwE6",
  "key19": "3z2nWhdpnfceJvaDJ5RwX3EpgccEaWhe9gJLcHJeUANKySoHjjggHDA7qTResgR6GFgoM44z23C1XVWCe3iNGd9h",
  "key20": "cVf8BasJyeDB3tHfuYcywjdYK1mUKiiHAsNT24x4k418CrKgp6VQv3ZGRFSehx4izXAkb5suvcLKygM1kxz3pkw",
  "key21": "5m7FSCndofFP4f7taUUhjobX73EjXHkKVBCj2UDDeUCT69rTBVfcv4T7smY2JKWC7X6rZLvFmWQVTSzM8T4VUNQF",
  "key22": "3eorG42cwNa98TfUDoXwoGtkwwR3SDu1UE9xKbc1YLBM1k9Zx8DkgknXVy1eWTkLvfsiymYFFDbBWUA1pDJBU5JD",
  "key23": "H1274HL2LsSG9sxmF8J8va4fmpJL3zpq6WpkVQAn6Q8ZJwxztLcbycR2rgnB12FJmHuQahhXwCkuEVHCefQsTGW",
  "key24": "5GwXdAYbwvyFJPc1GoYztBpwgYSF9L6bSaPJE6MTjWXcvhfHjz723qjruQEsya2RKCrYQaw4W9tsg3G7uNwaWp7m",
  "key25": "2eJ4jUexdvYyDKx4uSGuKC89TnjibdiBNe9NKdRTsbB2egFBAyt5u1GG1Xxk8NRTdKHVVjGzniQmGUywDVNVkoiH",
  "key26": "wD79i7tu4oxcMCKoistN243wZAdRvKJqsRMEqhN7GjhyiQPAMQPPzzKFciQiZX9BUN5VfwLLotAJgnxvvezt4Lj",
  "key27": "4yttB3xPahBeWcugn2GL88soKToRq1CmnWrmgYBbvAanCRu4br39DXdH9PzC75coKgUDqrsN9fydAWjAFzQDis8u",
  "key28": "3Rr87AHbc5jbAP5v56G2dEH9pGgPKzLeisKQh9EmnmVHn6vBCojLycLVQqz5qat9Lw1sq64jPVYTrnir3ZUy9T6z",
  "key29": "3LzFuGLQZVYLNpkKFPE816NpQtiSG4kb99MqiXLhHAun7sAoxWQcdTRwYbCBtRYiREpjaPqJHh7fZkksPSQYDHj9",
  "key30": "4y7jLDkvGUy8jbxM9Lpv6XdUZwDH4C1uLGSMRg5cRKPsrZGgdcqu4rZgY1GdUz88u7wjw8LzZHD44CGxdzKDnn7G"
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
