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
    "4v5zzpeR7Vfi1fCUpyQakAGyuxsjD7kNfPXUF4ouiURsTCjKThhWAk8AyT6rBCAnSbCVdVRdSWqysdJNUA1kPgnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryLzW3MzUBagKuEbK8PhbvTHqEW3vHWzxPDJ72rTWgqS9ob8hR6kNnoKSLYZJJTnFpGDMLEFwQNsZdSLRRfx3FY",
  "key1": "2dG4SRZkGRC7bpkjjhSAPtcubEZ3HHaE5TVHtENPfh75US8LBHLpsw3u2mwzHqGWWxJJrjzgSbyigeKrf1ziRTb6",
  "key2": "4j5rJA1my828hjgSHWftRnZ7CVKbvkZU4ZGzEiQfSDfnFwDk4G9Jx4RgzDRpgpbsWMhP4NCgcSn6ezSxN54yHM8d",
  "key3": "gzhXRqxtgKfANXpefWhp5x4kvs7xfVnuPhVHvQCLLY6S5gVhYYqGnUkUrQ52tfwKwc3EjBu7vbtgtoQoAJaapGd",
  "key4": "4CGATcaQUDkFaPyWybJMrjabwuuDX4TvcWpyZgsEQ54iSrhnfrGKMMfKQfTGmJuef6yuXsrgzwF8Vj4mQqJWDMAF",
  "key5": "3sathfFQLiL2ui8N3C2LcqKHHCn9bxQdA2f82BPEMHyNqeXf98x26AnudoAuQj4M4VTF8BsL9hDQZNS4F8YUnhvM",
  "key6": "41iPCWkVXhUvJxiKFoAk2TueYULQFFUx49QgRLrged7Y8rcrqm7p7kMDyhpBWyusjYEXVvJRUEJgAPinWksgi8QE",
  "key7": "59ByXGkMgATkETDaqXpXki5QKwfVQ9pNVCnYwPoytU9xjLD4n9fwjLchUvapmq2kZ9Xs6aJJ9gVek8G8fCmEcNEd",
  "key8": "51PjgYJTqAFZhb5ozCFPrqt7Y91uUHGMhJqgF8q57cJgK6kULnRrSkvHs8X7WVV5WKHyduf16zd83ExV18NMypiq",
  "key9": "3wNkPBQfs6od55T9WxBD8UJ53Tj8oqWQBmZKacSKdrwHRVx4KL9MeLrJeBtEt5J2Ytipudb52DsTRJL5zX43t2oR",
  "key10": "3xCbLZjizAneuciHabrTqQZq5iChYXgpDZferbrZXpPcRZP9AD16gFN8kxrnyv78QbaJWDeyfG78aWgbgTp41ZbM",
  "key11": "YUevrFLJq8DHKmUPqwJ8PkTE3XV5zDbNEogZES5VB28fXaw1JEeqR6jdaAmyN8eZgLVf19mbws2mjdUj6a6XcGU",
  "key12": "3c9PftqHFC4X735Y51X53V5jep64WCsdUP7GHFeUwqkgH8Fh1CN6HXnuZrCNQexu2rumnohF4mwu2iBtiChRBqu6",
  "key13": "4rGF9ZZyDyMm5vyYZVvSinQnqYKG2NKx1oN4yPZn4iG6NQnuDMnZWR3SqXwd2M8uffdsNp3edg4mXiakmW19nkPA",
  "key14": "PBfrhsAuei89doasVAgxQksrua8gBoVS28NPh6t6QRELN7gk1cp5zv9R38eQHXuAry4Deqc5fApyQ9ZEQGYDigZ",
  "key15": "PzurkFmx5uEtcaXoib2Bw2rBZ9KXTxX1RFPpTse5CcKUYLzXXcpLcAebkS3gFsi42pUvwpAiPuajmDs65wzjPaW",
  "key16": "2BFLPigsqRwAbz1W5tQ8Yyt4436DksWxq7mLDr2QakKpqEcRav3MtnD9etGH1oKyg5mrMM8GXWuDv8WUr1r7BwYu",
  "key17": "5CftX7ZsDe5ggsenr7PCRC2zMVKMx6dZ5YZof3e6bwXhyZX9s8BDyTUPDyvVo3Y3WmKEHafQW3DoozPUCuw9g8UH",
  "key18": "611oEVNKkst6932fHPkvSW6zcbDxh3TUCbhphpuyUegNhzWLBk7enRMieceA1s62zkoFjAqgSBnYsTz4wSGGTny1",
  "key19": "5PSBVefiQ8rbwyXtnZ5uedBUS1YnRyUXvPwuUfXykk6iRj3qhN7kUGgQU9fBoYktZqba7Dwavw9okRNcnn3nUbNj",
  "key20": "31dkciTsJLrFRP5LdDQUxA7pgCLFkaQdpRjyQxfUy32cEZzjkJ2hwPcPuQhp8CGQzMLBayATxxkPFvrT9kxRehL6",
  "key21": "RvzcGWNPMY8DxXNTaa2P5Xbp7DafYbRvM93YJj4oVW5jbxVTN3wLDK3SrnT1WjvfR71TinL5q2SGb9TKvSk5A8u",
  "key22": "KCCmkAefsLv8gp4dk6g2ygn4RZK4aJ63zfjgauWZSkSL4FjREeCXfqy2fVSxLTsxmeGXRKLbaztd4NKBsfPu1Jb",
  "key23": "2bsJTbSgFrudNda5HwrcLnBu3JqaHL76zQAUZUeTTv6rS9EeMkkkgP2YRnDroom8ykoLVBR9CnmFJydzeTBmG6qG",
  "key24": "3XFkWRYaC3xG8pSLucEEr3FuHkW2koPaegMWAfVxjLsj6ccy4oN5HTsULbce6itmTpnxS5dRsBHZXHyY2TQGEMWE",
  "key25": "aH2RKTeg7zefcbsPEuYcw3JoSiZ2zEEFCX8GWVMT1P8Rd3n2U2XiFWS7GArLCvEDXGzU8pcPFMXVbWcg95rj6RY",
  "key26": "3sZR6mjdq9NP1Mxwa8gfgnqNvJnkRzEwB8vMqUz7hSPMU9F8n9goFpa7wURNhV7AmUUwWhKuwuoUcXS7VJ7CKoGZ",
  "key27": "QHL5HsUse4C3zLUvQKJLL8Nrit7VDcNprGqo72fdDGVso6p6WKnzbQZZWsr29u7nBarcEAq1uEeLp1FaaH9mKVM",
  "key28": "3ZAdhma4DjrADsDXXQeDsQukFW1bF4iCm7i65thiv6NbHwCw6XgNVAj21M29LbpzVQ2urtZcDkRSiCQCop2SiLyN",
  "key29": "3D4wScTeg8LbZ151vKPsNWKtg2MNauzXGrEiWZniTdTupgQYPmJavrpnCEL9DBU5dptMmN94dsXTWxHviY3E9GWJ",
  "key30": "3C9kCHj9AtrSvU7iCR3chu4K8KeMQzyQRkSwW6qTyRggwsitATonUHMiWRxBinJ7yeenY5XvrwkjJCHAuStWRDnr",
  "key31": "3K8SPxHUuWxpf2DEzpX382wY5vbXt6nEKZtDFBPj4fWg8rcgjQq1Gc8M3AF43DR9sv7vvjrEWubgYSaN33eyUeBo",
  "key32": "z5pSzMPo94Te4KJdkqyrVGCGwAuh4pN73DVFAVAM3nhR6B2wJfKjiBGb1tJLbgLtWoZveFjUkbTd4zyUcvJDSpZ",
  "key33": "34y9wLkNrvhkxaSRJ3jfnvpcz7AmN4VpPv9oxzq2im32yG7dQ4NxC72h1TmERJaEu1bqND7bEZg5VueFPbMHoJUk",
  "key34": "3rE3Ge6k9tXpiRf6aNUhj9ukHC2yDmpNAoxxVNQuypTNH5nvHVvy21sbyHbMgUTUp62Ro35XX1rfktBKC5YKVvKe"
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
