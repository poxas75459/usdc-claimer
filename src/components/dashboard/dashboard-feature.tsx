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
    "4RoEQGLQu5Epre3YTz8C238ZgqSBya7eHSTETjbxe84FA18eeuPscNkB4AnA7ShH67Tg1kxvBjcrL5zBBKwiehwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39AJTtK6a8xMyLHauPpPuwWrudmMxgJXWk58jxKBQQF8sPQ3DG53Jxzz1dsydHhvbjr92wspZV22wueYGS8sHUfM",
  "key1": "vzxspW8EPNwcYhAbihWKCiC7F2unicTLfy6AnTWcxU8UEaaBTLG7hUMvyEKXE2U79Brzu996jYXM2agdtLC6iut",
  "key2": "64efhXrygtFpQ3nWvTD1Yseg5EmstNCyva7Jgvx2CnzoWB81GBvL6pStTH7KBqCPKqUcbNnGNZ7sUM9w9Bia3hqA",
  "key3": "2zeAsT4XvDjYKZxhfggmHCdtFdqnDUt2eqqhewrZQqLdz8CoBEYBqtgoXSxMve5ArNKk7o7xC4NTAthh2Xi2R2HV",
  "key4": "Yx3B641qHyJ7k9jeM7mgriEUGxhUk2xiodN8MWVg3wmW8exqgUUUnFN3Lk57hxCgu1TKGSTKdCMDT3BYaDsnMJN",
  "key5": "5kcGBbZNuy173FdDW1crRbKrUHn921NBQZGVxZr7rM5v3GjbjXNYNhckCYFe5JsHXbSq7beoRbqo6RukezRufNqK",
  "key6": "59DgcvXm98JCTQEppCtMRTHh5pJvfjtcw2zq8MVZ27nzWeaSaXk1PTMkPrsf89xUSBTgtDjJtUjp3hQy4kuv9AdN",
  "key7": "3REbhs2oKjDqf9UUA6mPdyn5G8CzmkcWJDSmYPVP82ub59stXdV78nBhj2XaAGxX3hTQRvLWRQeGVJ3x4avDEGB1",
  "key8": "3eM17EmD3euo352G7SrSWokhohaYJNZ3JSrtvSegdCQVcTSdBdcgHrqxcqf3L9KZ7mwAMaswUjZTSe3Dykae77wk",
  "key9": "rkEjfbjkVCNsUiaRpLYJqpEqQKxieMAnY25h4HRsFbnY3GV4Le8idDi6A7e8ejRnF7GMaJ1fKMa7gEd3Y2dxmgd",
  "key10": "SN5JfrMrbgu3L4qkLp1VXeYivXmfF98rgsWbV2WjWyWwy5wLV41v7QSSGeVuF3KM5TRf3Z3DSB7JhSPBJBuLCzL",
  "key11": "HomPByFhf3fEHQHcNS94F2BhDqSXKXpUpreBkZxfBpACyY8Y5PAysYFj4UGKdWjaRfxJ1rs5AVZP6nvxrkffecu",
  "key12": "2wGwkGd9TmXCdpmk34CNxZwPSwx8qqi9AmCjLsfB263Bbb8zKtgyzx7RzZSw7DuozQ9a4T9WVT6GiyWZvm3XmMkH",
  "key13": "34rFTfz8mDachMct69m6SiV6nY6ZSArgdN8k2SYaVorciBynr5S7YV9DiFKWV9xfPa2LS4WvuajsjPFbbsNNdPYT",
  "key14": "4Xo11eLrJ4mZiF6UvADf1FeebnGCUDPVML9khgiNA9ob6qDYvjrLLNRV5JmiYXcQQkWf4n5gwgXQY5wwdzcdeF42",
  "key15": "2B1mbgm5yjNoC2cspJmS1x2FiexKkrxactySKmnTaLKhUaF65RFD9mBhqC7VDc9Q3U1T3b2HYY6rYkM9t1A6PSdr",
  "key16": "2uH6EQK5oubsRFSYrFU4CVNHxKJmC13dSpzi5Qf1MyFAbzggCmH72NE6QsJ4yo3GRo5p6LBu5ZK22BRfSWwvNdUE",
  "key17": "2CUnn315e3a5fSZuPtk3n4HT5BruqgLQe2mUstvnmaDKy6e6HoaYdjP6QsMgAHax4HQuwqAFBhEuxA6miLPbcjBd",
  "key18": "3Feq4uNba4XYjKDebuS7oYCPJQ2quALA23gNhXwACYVPohxKeKt8rK7SZRk7U4YH7qEQqSBFWn37KcMxUwTmqD2Q",
  "key19": "4sJ2LGpoGXhyHiq8b66Rok5kAejbc7kW9o2RnibaDdpPyjZSmj2Ltkf65uG3DoRvso4shKvAkiWsZEqvUASzDWox",
  "key20": "3GRodkfJMtG5iwhZN69gnXDeQKHZ2YKBwtNAZvJsSCzKCyn1BhntZN4FF7TeABtMteqfmpHSr6VQQmtd7Vqrk2j2",
  "key21": "35y5tuhbizSFH374SWDEaNj1PD8YXR5niNgVzRbtyRpKPXr7R6CYaZeMTwnbL4UdfwCvsALfg3vxQifzBKhFBHNR",
  "key22": "123k97fHWxach8ALzKzUVa5vwht6m7bCLBeU7nbve5WgMaY2WFTLbudomxffwzR9kAAp7US4nGmrX3f4cBPgVkay",
  "key23": "3NdfZWxrsCHV8TWav8AZyjQPbFRCcQpTvG3QGmgtNeD9Qp5DGtZSnSh9k1Pq3w7MtBbvPf9PYxrvaKkzK5RLeydg",
  "key24": "484JdwS8woKe5VN3JYKoKgPMaW3C4vCj4paFPKTnrwnUxEc7Nf3GKiXVxaTczswMyVeUNKamMeQ6qfkjUgmRhEMY",
  "key25": "PgqWFxoLgzdQjv6m6uNpMru6DBVEwmZJ8KhK6rm59ucjyCqE48fC5h8ALF43qikSZRBZ6UCUs18QDSyCGiZ1Dng",
  "key26": "2Z4mfbbSESCAXkHk6d9YFE1YU8NSJFbiVBV1cXx1LoRdSjz5nYpCKZ15oPErQWgYUBgvD8qNFcsSKW54xw5T1Gf9",
  "key27": "35qtkjA4DwJfWodeDk4LXUkGKj8vXDcmVsWERaknnyKn91Q9Q1KgLXi1WEbJZmm9YroeqURRfUTVSQrvoMZTZJtw",
  "key28": "3xGtEUDRPdJgajvE9yG48Z7FsNPxQhiZkiMbMxhqpv3ZmxY4bAmn3rxQUgih41zEUZbENCmBC4RWTxUcB34RjLgE"
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
