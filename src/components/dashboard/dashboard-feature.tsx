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
    "5mgo2cUDLnAA4JU5nb55JXvFVNfxVSZRrMcKEZZTuEtbnLu1Ggm6XMU7NaLDarxc4HXjGZv9ZHpBGSsH5MKCbwqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjkAf3z5vJVxJR8UJ8FWhCTrbbSdw6gxmHxANFPt8rL7Juwu2eStrED4AhgSzoXdzmRaZTsQHRbTCu3jQsfd7i8",
  "key1": "4otGiDExvomN3YDaQzM1FUdUMVbXbyjVNNgbDvbLgMkx6RmqAinmX9XewVePp12fNUvBFPer5k1wpkk7s7KSpAmL",
  "key2": "5XPVadtRjFCJLbwPFNvBV9uAbKff7UZZgyxRMRbYc7NiUCzKYsSbjb6zeLVEfg2Dr2eAo6a4y1gXQugnrkRQjLFX",
  "key3": "5HP5SGqto3Kx7717gbWQeay3kRZBgWh7h8Ev1wKN9BBPGLU4cNUMStfcjRzirSFcAYCr7vfxqw8JruB3BpLuQUy4",
  "key4": "28EAoWseAJt2p32yJBuyKYBZz96MjWu1KN1JFRrkk72qKVpkV9nxQHctr1P6tXB7PSVsQ1GgsFXttoa9qs4z9HDJ",
  "key5": "5m2xqBvHr1nNsXRu9wvVLiAttXey4ykZ8ZeZjkco3hYCNSe1vNT63M63jTDXgca6YSehEQyckLj4yfKFpTf89dYv",
  "key6": "4tXFBDt59mouNsJE5WNaY1aBhixS1qvaF1zpHbpf8jhUyAoiJFPhhonZBUZ3QDBW3nHCGf9nMj1dxMXE4ujzNXsS",
  "key7": "4NAgdPifrooUTZbp4bxSbC443RCurKCSAvEkhN5NVA6ufP3z7c8GKMuxnBRG6oVAPCR7X5aPr4WSoYKzaVQPaT6H",
  "key8": "qyB1XxfsiRQriai5HR93jUNyhXNvYxzFpSbjLLMHgGFZgXq4ykAopFieUjNkKitPgLA4EvCzjDW8gsGVzhoVpQk",
  "key9": "7tNbt7S9NP2yteivjZkL5CTyka8AtUMfaYrc3Mp7nGUpQQ68Cak241hoinMjdjcBXKsmSpGzZf2dedzWz7c6L92",
  "key10": "2uzgXHuQnxw8AYE8Sv7XyCNbM4i6MDtwZVcwCh6wAo4Yxov79aRpkYryLQeba12ijhGdUt8AB8DLHBj6PjZNFn83",
  "key11": "41AqN6qJH1heCqqWFGz2KKKtikvV2jFZGanRCMgdBXkgyEFBWfT7tGWPoVa5X4CLj8XWNLEskaBM2xzGsiDSGkYB",
  "key12": "3rQJ3scWGXxipEixBtQvkwSQgFxgnnrgYQFu6jr2REgXBFWoGQQ7qmrhfEY92kJhQ1sBywv1VnKV31Rr4hdc8H5u",
  "key13": "5tfxU2KjQptB62A79xaRZDeRzGrrLUK9B1yJ8fKXgF14fSdpm8jvdQ3Wdc8BKpkyFBJ9a86oPin8dxowNchA58JQ",
  "key14": "5y2F26sd7ZFvNHhXDk7dz86UCSzJbDxPjCE9fGhCA1MaybWbuPGtJ11CoRWsygzLcY6vcjm26ovJeBLVhsmNGWRf",
  "key15": "Sy2PEHFfmDaPf851u1j9nr7QfpnMftdKcrg5su2WThrxuFYULpkNqMQi9bKsS4sZvY7545Y6VtKRxuntWnVeYpF",
  "key16": "nxiXviXGzPHcxh1Z2ASmDdj2EQvo2FJL8SE8Rzby4u7VroeNciL47CZE1fpeAF8bRw7dzLziBuRfFerpmZGKtz1",
  "key17": "zh1ViZv7qL3PAQgN5rztRSHTKJ6ZVCEcyPHcmQw926k6uBfoXX838Cnjsjx1hpv1FKzbP5sggfu6idY9AZm1hf2",
  "key18": "3QUC2BXZYnb6SVKvxXZyDAdBwnCaFj2iYVjHKmvDfgJidVLJGroLhGun3n9Yv3bmhWhvD33VVJ1983ruVFyHXfZk",
  "key19": "5rRDTK7qJ7fcN6XJk3z9gDFyWUVfPaCMgomMwwTwcTJWpjmsg43WesF9a3LCaLHcHCYubKRgiz89gBLJmsQsPygx",
  "key20": "McuYEoKVSHpncxQZgfcLK6fcKLtiQbgCf4jKCGWHsjjmcNQQN4rVgRCWs7y39XGxQz6wb2DFX71uwxrXkLCUnZm",
  "key21": "3F6rregDE2omy3Fkhmjpb63D9PBuT1h2tDC8gYhtTFewBFwZ8CwrRe8Zin2A98PJm4c1sxF7je1qyCwKKyFKxFaH",
  "key22": "3rf3TenLWiYkoEu9uPURwizGCwrSMTv3dwuGZByNdNArVsKDN5cAKzX7CwQ4PKkR9ZyxEqPtLS6k2ARffxDDXS2r",
  "key23": "4tRpQqokY69vPEiZiko89bVEx5hDX4Wxn4UPUVVT8fPXsKXc4EdE2b2tq5LdZXuvxiYw9wUPHfnk4JNzzDNguMav",
  "key24": "4AoXzFxgHozZjaJjbg85NsFqaFya192Lp8VfiF6NGcbbyxxyxBabV5mbuH5gB6YbMTD8HPdcAmWWG1dQRp5pbzSz",
  "key25": "5jbsYH49HHcn6U5YfBp8xRrQhwZy7jNGbjUJ65xiWRLwb89H41sc8h8vDTM4cYhxXF2EfaatRbMU9WjeJpkNuoad",
  "key26": "2NYLwUGKUtkzt8bJckeqNyMESv9nvqTsTUgkWeJuNptd7J1UK8Tc1yvNu6j6BbSQ52s473wrc9corBKM8UssoVPj",
  "key27": "3RiFLQUiNK47aiRtAhUsa1gk7vdLMrXp8tCJbd2G7fSZf5tx9utXEHK9FFrbDJ7JvoRNM6WEaR17cyMTZwj9DZBr"
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
