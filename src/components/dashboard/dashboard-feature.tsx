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
    "4aNXCrVZmMSXVuER3MgdPs6DeoWPSZ2fvDCMDcHJTbfLaehhuPtT7P2ifcF8wB4yVZ2yruvnmnntc17jT6s5QTS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TLe6Ptdd3FVtKyK2EnTdPswy7Q5MLnzPMBNp6oERSV1zK7K5uQviAzWMCYuYu8FkJLR3McZfYtJ55VZ3xpXZD3",
  "key1": "4EEPzAZKfSqQx9HKgptomQevzMt2eAcNGHLCLwph8AEKmqYEGzPo3bosjftD1p1xNQuNeX2ovRxLysrwAkQmb618",
  "key2": "5PKsatnZDQJucchUm62eGViQ7NwzEgqdn7ks1BJg4JLpEc6hhLypJVzR1qqidQKrd22P4WPxCxm83CPGyPGfHtnR",
  "key3": "2DDnodisNkTiy9X4YmMGzdz2jmoxHeZfbBPFYGSpsXAcV5qnAnNydWmnQkWAGx2mUYhEoaLC1j4EWGzUHqgzEKJf",
  "key4": "tbPe5JS7s8Kv4s2m9iJBxbeD9jJR7asUGG1LMnYkJap1Y1DvbLQcG88YL97NPFQBQgMbtYR8JhrrkNJPY9XKPDM",
  "key5": "3dmKSB1LUT7DmjSniUx9JHYTFRtmRMp6VCWAKCJm3v5bbgL4yxGTtmH9TFaZF3LZoTiPfmefYKTd9qyabUsrBmcP",
  "key6": "55DAjFKK7AyYKwQks5QqRFpq89uFHopQGxqAgT32numcxeF8ipoe3M1V71NVEf4cpFm7pSn61EN7GHnVqSKo5EVH",
  "key7": "2ku9iPuhnLGH6tYPPgVWS4hdBMCsbv8mnf9Zvj2tbgjaHsNCFNnp5aNbLoZfiAmXpuREWxB5Fkb64GFQ54ioa65f",
  "key8": "3dXdNrpHZ25J5hAKuC1heuC6rythkpFKKaVhZfTxF4BGUYV25ohRcrjjSbraYxtBZzvNQhykiNvdMGA63bzeuXXY",
  "key9": "2VYN8xaVfXGRXYBeTxUUCTRjK4jFrSsnSGfaTRZC5yqSXrcEhhLPKmPaXbNugyWBy5CQ6grAi68AECsbPAipBvBy",
  "key10": "2JMK8JjAUZpx96GnujpZAJZ3Erz8kQufdUrvonPggkpcpit1fFAmBfqyvVV4SBjFLs7QhGMAN2HG94EkXHwqLhMn",
  "key11": "4cNbVNwCrZd3RxdLYuTGrFtgAMeGTsaW7KtiB321TkzfLsUTGcjguAzYM51cHRNpTozK1X5jaXkQxe19gv3nTPYy",
  "key12": "4M2ZKBU65ZajjM6Zrrgb3LTqByneo3dsJ93ZRP3q2cSzSenvdJaAjxxthNL9Xyhjj9jxr5KVCMmSqoJAvjhSZ17Z",
  "key13": "1H8LXFJsyYrNGQnZknypWGEkjB7SjzK5V9PnwFA8XmpBWwH8r1w6Cem1gfauVYhL3pzmZXZGuDuy7Rx3n7pTtyg",
  "key14": "nDnJd4uNWx9kk87QLZwj8QmhcKAZU87drioZR5p1fckhgQVCgn4tAzG7XvcNjakQ3gLG1vmSsLynh1PJsVKkMrN",
  "key15": "4aCwh6z8BTTH6U5kHDpjgsBhPsPya7aG9AAD6c7vWN4DBdn3DpEfNYeczhE6NbN1XfrD1AGvNBpimCjPLKeLw6RW",
  "key16": "5gHYZrgeU1XssKywHm3uHNHnD7YqenBqDiVozbaxa1THh7x3QNQ8MVUXgGEEUru5vkt4kQ3YW6tisRBigeVEhX2E",
  "key17": "4cbP2VaqVv5fmYYqw1Ui2xPGwYdmvwH2HgCgyMdppnuvHZR1EHrKdpvNDhjqZyTYxVpXoXzuGZEFYKdajCKj3o3s",
  "key18": "HBqXzgriZfukyqPdaKC4ACFhkSW5XLV47ho9hfBT6w5uobXB5n69XVup6wyaUeg7zCoy92vQpEPnDxCGQVi2kRy",
  "key19": "2cxKdtbwbhgVdKDHfSMCLxR8AMYMFueegFzkfGf3QqAAgvzSjWRXQfbTEFrFzFbsVqe5DDjT8FmQJaZRSTKnzVC4",
  "key20": "4dbRyRXBmzQCaUkht7A1GbjWPFSF8jfNvccnMgG1FxtSTP8fcUfj7ybuEWsYMVdTQ86RkbaSJiFGaXfzGfhPZ91i",
  "key21": "3RWiXJ188U9KH9XXTT4NLo1GdMWhaNyTg4mbWjvZtRUfrCbqHkpGKA7dKVKySALLXnWMSYxowoeuAfTW7TG6WPx",
  "key22": "b89q3NaSVBscRoTo43FrQU5bUviwYLLCvQkBteoHkEnu5Cuq978DPur9mttnTtXrQ1U3LMt3P8dyEPmKKHX2Ryb",
  "key23": "29rJ6v8zC2xn66yMXqmr73ebqFLg4oriiNAUxrLpy2cEbv7omFKygnqYDuKv2sE5ZStVSpZhWUVH6ZF4vC1iVEjn",
  "key24": "5VhGVAooZENqD14kFGBufSbvXwNzXWHn6G3scJaZJDEvHQarKwmXGSXYQMY3xwfsag14GnVh7dqMmMNr82EuHFRk",
  "key25": "3cbrWaB2RyoYHq1c37k6n4md8bSBkFQsnb2yXFwPxdcMueX3xC2V9x8P6AJGEgxxmadyd8BQNqW4nGDSJLhFRmJK",
  "key26": "56YtyidhjTsamSfR9Y3bPXCKgbsse3mf1qNbZC8vunJGYB9sD8D9RDiBbw4y5n6znJVVV23fZaBqPrqHepBBFDim",
  "key27": "32F2gghwLojNnob1A1LNK83B7EpemHDnotyQb7V9oPFLC2PBYoPDW4jh4voHVevy62LPVuHN78jnDLgBNC9zm2t1",
  "key28": "UiVf9TpkFfqxXhZoWe9Bpfd7jBUCecTggBi28am1UoST8gFzB1o7KFdJf8N6QqTa2fJTGLWjaTKV3KfHXT2dAjW",
  "key29": "5frkpjvKQK8MAia4UrSEfSYEzFsjf6dYx6V6ZimQMw3Qo3UfcS6CKpNrZsrsP9o3ACS2kpVA1buaSNzdZHMJgkJn",
  "key30": "4cZa3yVkttVX16JBuWTnB4FV5yywgKkmKqHN4XPD1EpMLBkkCjeT24HJjEWciiDi9sQxaEFn6pWdrXnYFMvqd6nu",
  "key31": "3L5vRExR5iGdkBdQSD4RFro6MK2oVahyBTnJHqhSLTo8kjnzufNH7sTmGS8EcviNyGqTZt9DqGKWZCkES8nMjbf1"
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
