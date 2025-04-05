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
    "4JAUmPaFUticzo7FRW3d6vuLenC1MnyNixRP3vGiJU28L16s5FV4gRXBCUqWCAtPAEhmHr42ijjAxswRvGSsRPE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZUQq6vgqFYUNvfBzn4PbiBHEC3mpFHJmVv1wiiXnSqfVgAkhJJUoGRvonwSkYqo1qRZEck1GswTvgAKKGbiXqo",
  "key1": "2V7SARUvPT6REJUq5A8Xuc2XdsSSVPc9tbajkvPs2vt7wF6GHjvkUHzqAdJgz7UNnBDB5PyYMKDVKFfwannkw3yH",
  "key2": "5X66btCqETQJTazrtcsYixva3iQ4Ae5iERd5V1wgCojR6VKdATyDgdFZkxjsM5BBS32vrRXGu6muSoFc9rvqy9dg",
  "key3": "2tvx1S9VJhXUn9khe9hGdJGtCDsBWKb35wXk84PydPojq2gAf7Vb5SMyaekXGCrNTF2RGXYxteDNVaTFxxsdYyxW",
  "key4": "4T45W6ZjRsmaJ1cb1UTXMPs66BHPsDGtotJ6LvyGDvwhhWS3Ni9FcKx8iSHgCKLA7CdC6BchJTSKnoVijMJEp2EM",
  "key5": "LDRmCd2k5USkgNy1eaVfYnj8DM7tLmyd5ak1qYenGc2Wh8TFcRneCPSEjFJR4feug3tV2seFEh22ob26jBKoJ2j",
  "key6": "3E9tpt2bg1oGhdRYskXU9J6pHNR2sZhpJgngEYk16mFrA4CYoNcUVj7uM5k2tz3VHYaUegAjH1T48oTbXDVNoB4Z",
  "key7": "4DyPANNHBJbmtMM2dJFeYrfEvV1NQaRk52R1LMAAZP8NARcT4sB1B8SYccmJcUQquAm7P4Xn9YA8dWJV3Bp9rK94",
  "key8": "4MosMr4vAKkEV1bDHHhvVfqSwVK2a9mH2HCr7PUHN1n2Riz7HdyfaynFBWFK9whTZE4vx3KLgaSYLUACc244f9gU",
  "key9": "55Xi7jQEWXC7d88UXGCon33fQWhhY9s3LFU2Q4J7JPqrs1WfLV4EC3bE5uJAZc7ojKxCL39q6gYx4jsKVcPJGrcw",
  "key10": "479N7Z3ZeV3j8tshLZsGtzKSQsmvd6s6RM3B9DzZ3QGhYYsmZSdSWUPqMyPwVrgPCCp5AmMpq7L3qPMMaRKJFcjE",
  "key11": "3KP2Esw5Yj34JE7y5mqAcCVxmeCw4toUpDsCv3bT3Yd56vH5VtjyJn6jbLQ5nXwSF8VMZtx4SRLWXbUhfgvf5Und",
  "key12": "Buy9PwA6Zkf6NgbdGKG4EaUBgYAwWF7MbUMTUNFPFdrLHYqC1SKtH1RavhnXbGtS2LkuunugqruYk8VHCaoSbV1",
  "key13": "2rv5S7zkmwY6mE6VK9rpgUxvnzQaZjpfdUMnphpSpfbJWrA1TWN5TSi9Mvw8xojundBqpMfZnV1SZVuqw9y8T3Yo",
  "key14": "V2p5sypWQT7pPjFYiz7yRNwJ9APhoep2Lo9rCLP4f4QtUZxJZK3u37otRKxDr6h77XMtE7bbNGqZ6xoLwprK6Lz",
  "key15": "5aWgjvaTPS5DQsU2ZmXNZJwvUkUgSdPqNQHxcdgqrQrBRzGYMpeQVfmmZT2dD1RZApmSVonSohRyF2VA5z26HTnA",
  "key16": "oUqvv2TqsJWadUGky5nbTYNvtz8wkd4oLxCT29JGqzEmye8jZaejxpVWGW2XPeD5jFHWHgZYvcTTHb3CCKyN5YS",
  "key17": "5MJASBb62SMnQiGJqzUVsVKLFmkutkmUyJgAgHrpVuDSnurH2jCoqxLrzd9z6ZFafaD9gRjFaabfeQJaiqRzsE4U",
  "key18": "BwduaP4z4MoTxBRiUd3GX3G4vXRhDWgCxoUskx72aw1XGo46bpnzmoTDbnTULScGXKN5rqvGfTzVUhWhNapp2JL",
  "key19": "2r1J7EhjP4gyePCDnAvC7vuccirV7kdksJFXPR87w8Ju5C3KP1wcBmrWweikPdinwS9AvHuPWh6wp2e3PHm8GAMx",
  "key20": "U1pLFPiNF7tBFBpsAi6mtDxJERpXneMq2NaZGov82HUJToHdePek9m6tB1HkKQ2gqXM5wEnzcBHYUaHDKizUvLu",
  "key21": "35E98SkqNYyDWeDyJouFVdi4tJF24SeUkQQt6r19Xj5jHkEUe8LtN5rUVAdKYEkBybaQac6NtYJMt9Q1tSEBwK2E",
  "key22": "37A6v8GH8C3KA5mPTCSBjbUQPGiKCZS88Wt7y6P6tvX8pVmGhpE1P3TAJ7fwAoYR7pLFiNwZhiuU7TJgdJBymLsd",
  "key23": "4AMtst5DM1LPP1ANsPEGChxfUJbEDDGKKGgyR8o1KhPGsKkkFDMuLzAaqqNxzPJQ6JRUqfNa5pYrGDfQ2byLn57q",
  "key24": "3hfqgmqfqjxygoYS8W7EBVRN74GGKNWfReqPQJjVjNzuUJZkGq2VmFyKZ4uH59acrRjmqtSGuzwk1SqWTaSmqpzK"
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
