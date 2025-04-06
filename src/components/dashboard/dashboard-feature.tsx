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
    "3BXFM18BKoBq529W7fasEEr5y3YmysaKsC7XTiMLmJeqZXBZQuzxW5LnT9JhP8gnf16UpN4BkhWvMFYBWR84hnbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VRtJyxTLdYbVpDqJaBBQ8ic86pU6YNy1EWcx5wWM4ms1ZSnKUV7w8WgguR3uZXTXSybVBJGzGkbuztytwqfG7Mi",
  "key1": "4hF7xaBmq5gsrQqzb89sbGtbcDHSUTQLG9qF8GEeVW4HU5Vbu5sSpMyDxUpQxzSH7vgZyHBGaHU1BzwueubxvnAL",
  "key2": "3bqWvGyAZXDK4jzoQA83JCY8Bbev37uNCRyoMww5q71FxyZYPFaqfPB8Mmgd7aU7eHDocwtR6xUsKwAM7rV7n9zx",
  "key3": "4tmkfdYKfTYqf5Y1M1L6cevf4dMkZbzTP1uCGtN6pLvJiEwTHtkGetDuiyu9m4LZX72MD17hquU4TfE9369HcATh",
  "key4": "4Nwzv7Q86c2KajsrDeeMTePePz6gkZipvkFz4SRU3yBtZB7x5gyVYCSGmtyeBwT7G8d9f5muo5r6tQmCdXQyWj88",
  "key5": "2a7A3xKwqQSFxfvmbjkjD4C93Vme5jFLsb1X8FxPEkfEgppoknLWr6r1DoC4cXT8uBHaBwiSb1gh5XdSt4SCWekv",
  "key6": "4t9zjpZcRLrXFQo7GqKfzh123eYBYozuFeWgbk8EP1pznou9EWFbQWGcHEop5togLZDU4seeuHhKTRXAaiYGEa4E",
  "key7": "NWSdGahL3zo2Fw9QcMaLY3zT6v3zzG4aofjm4g5ZjhSeajykWj1rgtNCSUV6cB9Y5UhMAZNzc7hcc1hU8f9GDwi",
  "key8": "4Xu3WiFhh8ssG5q6Red32Sjz2JyBk5uUpVSJWQHPyKyMHheEkQ8dEuM5bLEGSxF8kaWh7H6kD2YeT8uwxeYDb2rB",
  "key9": "2D7FuiEZKKupj6X3yw8HV87d3Augm6wWSyxzBkNNqySRyj3aXgCzEKr3CwCEomi7ZnQkc6ZEQy23UaJDjh68XdsM",
  "key10": "5zdpu4qvkg6rV7dkRitLKjw9ytDTAd6FvfxcnVMggCdKRx4d2AvFFazn8cghSA1PPyhu75nGtd6qZQgcoxArXE12",
  "key11": "49TZE4VcejTHWgyn3LKJADbEzWBY1YPCLGEseiuzjcwKX8tybyn4u7KKYVjJtE123JT2VrjG1rF192vwqn37DjKV",
  "key12": "4G7yGKYKyrfizx8bbJLFAG7y1G4f3baW3pFKxH7FqV4VjUisrTM7Ue28rH6ukSKz3mZkDkkzHapLNVYp2B14Y4DR",
  "key13": "36zWApGZ8y2Fxd5sem6UbHCK16c2ptS6tpxP44o33w8Pxy6iG9Nz5CpzkPKJ6mZrmsF37tp5vx6q8ibTDyiCSzYa",
  "key14": "J9oDzvtRmFBdzVFMofGKAHFe7YxqjLofVwErK5HMaPKr9dLG7Bzvhzjm9Z2Cur4yXTxAaSdFbEVETmKwcJ29sfN",
  "key15": "TpMruwBSxNTDQstGX4Ea73h97VhzSzSq2fAR5xR7bgLuTqzAw9SequU4gcom6NPZLJGjAxAx2mr4yufa6NrTBZ9",
  "key16": "65V2QmTUGEigaYWrDvCmiGZ5W7mm6AKa6x6zh9umdhMHnDSgumteVhRp9mgNdE3Pw9ijAcPkMWrD4D4qfodvKVPB",
  "key17": "5b9vaAZigrizgJmj1VZVpAU827xUMMKHsKCi8vcNF53GaoSwfd9e6vcyjDDNbB77X1rx43b2zTN9721DjcRYDJNC",
  "key18": "5f2F6esRySewPPjofUpGnMwWPNzkmh5QvMv9xuhhjBBpgpsd4Egr2rsR8vXuYybUgeUuQfTwcVv8dDpm21fj18bR",
  "key19": "2caEK6fRmVU5cr7FAjYWMjuRHhNb4c1Ar5iZaZn8ToGhvmA61qtTHHwpcweofFV6wwML83vNqodPxu6gnt1koD1B",
  "key20": "5BQU3TTMXCDYttDvpQC3J4tkoMSgoQVwQiTTgFm3p65biN423bFzpPEs6aXkKHAo3rrdQ5vM8KwaA4rhVH5tT3YT",
  "key21": "TzouPs7tc9dXEHvqZJSLwTTGe5uNZ4WjvkqWnw59e4TaA239Qc9Mx3rP2WbshKdJLeunaBgjuK623FyokSXtve2",
  "key22": "3KzFhbei9a3tzqGgoFkmz4kN1xBrrBzh5Aidi7nncsTzggkqskaZZ5h3DAcDSCkJgNoiCF9Bas8PtoAfDWSEMsGr",
  "key23": "2ebSLsnGbviBepVynjhZ4nXjr8LAH3iuGyFUynNNNFabKz6a7dWz9QZMogPK7Q8hKC1qmmkBcGcMqq9DxXPEDsgn",
  "key24": "25RUBsGkyafgdeQSSR4SaP2Sw4GJf5meUNTJKbUSdLmt81w8M2GDZjd7pfb8nAfp7faDrErFEuDcPoMmVKZt2f2S",
  "key25": "d7zoR1veWutYNAtSJuqqHCLPyXdppd6sM6x8sw35C9bZJgjQuU4jbUdDWHehRJGG8oaahc7Lw465SXASbK6xKoy",
  "key26": "3oYGixs7gfrSKdoRxhBx9G7xHjeNTN74QWgtVqUMU4V9mFG1GMHtgca5LFYsi8WwKQQi8GYW7vzZLfS4wJVDb9Jo",
  "key27": "2FYMyhpU5QGDHFYVj58yZ63Khg41SswXp5d9zdgishnXDj5PoNKd2P2sAhKL6mFofu5M2pPwD9Z4AkM75apsKiXu",
  "key28": "3xq6eTM7atT91X1e52RUWoGULRk8zneHSHE9oUQEQDb1SEtYnFdenNjmLsyVGhEyQxTVLwXTYcvCkFDpnpMVYP4N",
  "key29": "5ffoRyapyuyaiB2jJJAMwTuxhvFQAfvpM9wTRoxpnkwohuTpiwaASStuGSqE4DYtLy7f4ZU5HNSpsT9MGxryS9bj",
  "key30": "4GpcFWvrNLUfU6S9v8u48kE4MzzC4t6tRA29kfu9SYJSbCaWWDKs8R7qbyVUQY7LQPHA93nPeCZRYfb7n17Kpxsj",
  "key31": "67kTaGeb1ifZv2gfq9m3ZfxcVFtHhTjP5ZDcBuapHuRLtmv1tFoWyDyvEkzLNeMyxraJBP6ie5JAhrZYRzqdjoxD",
  "key32": "5bcJVEvz29Hqv5uFMKUSiPsDyRJxrmcx7vFjgTCR8YVMh5tQAruA4MKhsABUD1w44p4hxBnwV4f2xpwWPgDrR9s9",
  "key33": "5gWkg7jaXgehWWuTgcCm3px5Fbtuag15EMHakXqJ1ey1E7KYT1GcUYdV2ELEqcuggxCwpESzenzEReyqmkLgLX5C",
  "key34": "56BJaGdZRgWhZpfjPzLtEviKmpuK77TKT1MbgCqmujKivioNH9aHP6J9NCaA7J2KjcCcRMRDyTRGLVUiFMtZKh7D",
  "key35": "4aG9eLdTKn1kTRoUhzwsLjDWct8bKvkaNbSzt5Dzz44QkDJPHWy3xzEdF3saxevfrH6ChgeqBxBdncQob74EttsP",
  "key36": "5C9QFdvD2iCqh3jv7GHjJ6FchC9ksYqrNjoMs5k1WcDDzsKe2TrqcEiRRSkfk76zD3qZ3o4SPVizWCGxX6K9VTWv",
  "key37": "45DspHPokYZn132a94eeHoXmiaS5j5S1PasFx236bzddvJQMtQMu4ACGKwz9PpYAaRRL9ZdmBfSszT27osimQesu",
  "key38": "5YvHQf5STcyNXzMVayRHAr1cyPH67Y3zABnNZ33iceJEHwUiMmfDSjh5J4XvzVSpZtnM94rBiGwxdxmRTyUuiUcW",
  "key39": "5LAFpoN6uc6VpALMTqEJQyxBi6y1yAcbcJFNHFp3ZHviqiZghiRQQiuvecwVag6aBBLhsasN7G3LfVoP8dTHjGx8",
  "key40": "3wrYoxApQrpwbRbsG84MCVdYkRsvAuG5qqoJ1EBTRwuDfShnTzX5g6X9riY6JQzvHuqPiNA8oSxjiaapmPHA6AH2",
  "key41": "42zUNVGP5EzsQ3JoCRN9uPVXM148CYCmWPPNWrxf3A5taFhZLL2eXWRdbEjuBaJKKW8yLqEG5EBwH8EMDUPDkHje",
  "key42": "4t52MhMXbLRp4SFJ2jYKvRqR1W3RAx1x6cTz2nG4PZeKEVLUgaVQoAMHuRrHR17XA53Lggtjcj98gQ6bwfnfTAxi",
  "key43": "DE7poQUBa4Ta6xEcQh3hv53UTvF53LRqRaTp9CkBJJTPYsiLCmFR3YTo7FDo1B6vgt1izpevkDctgrcWzmh5YLu",
  "key44": "4cyemczwQW3nJyUzE96uEwdiv6G8QSQc6d5MPxfFca8LzP8ahHozMui31NDR9Rbsw1vZFpvNSjTviv6PWHsnpLai",
  "key45": "2pJF2W3yqtQRiVb9ucUTAM91zwQNRaXezSN6hpk6eSCbMo7ED3U1KegdhZAiUiS5rMzzUUtAiix8rYsZaorTG5iN",
  "key46": "2wS1HFdsSnAALDjbo3nor4RPWFbm8QnPXjDWMP9DVf2qdxw8ADQ7bGJCfRXfxmb4zbS5K6gPN4oG3bbFMbZkLyqP"
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
