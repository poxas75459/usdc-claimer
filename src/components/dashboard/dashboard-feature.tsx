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
    "CrTjGncBQAsgpC8U8reRoRkWsKYSfnjDLrnZRwLrra2XTXD3BqtHahDSXs3Z6B9bgVJ4PE9ZNJL1dz9FydGkVrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C15FArn5RvjJQ266uXX3YgFEFrwxMcSn4fZuGzu7rmX1PSwALGG4tf8nYRmJGQzUmjhgmhC2Ae8eqLiGseDLKnn",
  "key1": "Hqt4oNPSmLj6Eu32J9tqt2VRkVnjWW6yxcZMWR7ZN5c9sCnKBiwHhAAYbGTnE5rRhwk7DyMMkHkm93g7rScx2uY",
  "key2": "3rMQRkpiMtnR3hXejgPQpy1AdrVKz7d6XihuBmdWxkbaju1Gke2XCU3LthskorEwQ7jKwEDXRk4UMR5etbCM26rZ",
  "key3": "2CiSNkJn5VXcaKH2zAKjZcKs3tXsmKGknrzSYJnkbBCkCjmgkUKHof3GK3odBiPbfU7cWZjaYfqmHNAxkrYvHAw",
  "key4": "52CkMcwZDTGzBEpN5z8ujyMa1YU42xwEdpoDfAvxfB1EmgMK7WGVdvuz6bpnGgLuidNX23UhcMz8csR3c6vDrMQU",
  "key5": "3kDRSwGbn2sHz6MpVyp38ghd5heDBUDhnUBCsBnMR2io9Jwu3syKSebQxqqMAxM2k9UCwpmQFRTtwEYLWy7Cvj1j",
  "key6": "cVhwH7JYLwcpxokkPJvmDZTb1LTX72NgnDsFreoWjuqismi6qDpwdUFJHPymWShdqEL9eSJ6mgb3hhhs1DpZbQV",
  "key7": "4ZTZHMv6gZAC9g735JB3zNikLo4CwUzHESmutT5WjsahpTjN8w9QRvnZ3aCMHQf79NXwx8kjC2gpVKbGV5WEmJ8p",
  "key8": "2ojmkkfwDEdTzzgALwFjJDLMULQ8iEEraz5JRmbGYDzYsUqDPc6AxoDkrEnLuYpVxNLQ4EEGvaFUAxXH9Ry2iarc",
  "key9": "FYuz2u8cm8zcsBwfTtXiUZGkWVFLCJbbHMpdvCf9N1FjJhQyB7iumEPiECJocpvMSzQjx4KViRHCPdqmFZUQnob",
  "key10": "3b39seb6kzNRaxoW4GrZWYSyxym3gWNnGCLJ3x3phfn3nrDjdG1UYDpZ38Qc7uPhYXTTyvSMkfpiR6SET3sLAQqH",
  "key11": "3QvWshjL4Z9GcyPsU9ooS9TR4ZmrSWfsRwdz8UkWYTGm5AyC41G753c6278rZtqJLX1zc4yEe8LMfHHRbbrBGhxv",
  "key12": "5mU55ajJPY7SrokbYDwk4tdX2g7FT4yCeS63snxCBLonQwx5n4nesbXep3xS3CZPVMZtXSZctWyeSSGuxWLoADZT",
  "key13": "4VGAja6NWDcPknAUoV3DJQK4hgp252ayPHS5FQ5DSghDjZB6AtXF5RbtJkaDpCWiAuoprgDJUzefSbL84SeEtFkA",
  "key14": "2f8VgPdHHgGqwx14ACgCPCWNHaC4d5qGTgBaMXj2f44PdehaxmU2tphad2JYvomWteJYPN2C1qCUnQWi2n5bGDsD",
  "key15": "62TqyWS9KENFoiNpmWNAheUZbCiuADFR2Zza4okaYBHtSSakgi7dDiBfTHRZVXjq8vfJzttD66wWsx6vpjJA1guH",
  "key16": "KReX9iEfhoCqMwouLa55t2byZ6BpcTpTXvuxDYFwjKEwtFz3HpHJvsKHir54p6x1ZurvcCCNW5DSpxjeS3QeqqV",
  "key17": "3YfDLwW3wnEQCgwLPDYsAg4wAeGjMajZhvPJ1LHJF5nu6yeXUTVX5ypCvSKg4sAvczYD2178TVscGVoUhqmrUaQ7",
  "key18": "2dc7E6vFFJmvqP77NvPPnSLvXum6syHhCtsQ4B2QZpxbpZkUBY8M2a3u46K28nbXwBuUr7YoJpo8AVpEZWbDTRwB",
  "key19": "qogSsuDx58Z4ufmgtRHz1y4o14Tx3vrhL3zriXStUu5HtQ28iv78YBW9KhdF3cDJzs79RMAXFAADdKu5brcdk4m",
  "key20": "4nFgBmbreQdbmS9XdpUzsumvAzyhYK1CkdEDirzT4x1nn7rDujRDBzNnqTCK2WGj7ECmM1291Qyz5h3zgYejtFGB",
  "key21": "7xjj7NaMn3vuB2r3X7Gzh2FZ2fkHazPs5YfTaYtf7eeDFqdzJmpbrS3dZoN7kFGQcyAQRJKEh3DCYfGEkt3wYch",
  "key22": "3LbXNR5Xa6p4f2xok7EjnFVcoumYzXvpdErPa8u2PgV44Wjxicj9AmdTiA5G7WNGNCMToC7PUfdEr2wLKfgfTzQ8",
  "key23": "22ecsGZnwoeZA3uwscjbdxHPj1KJ6JWwbwexJvTi8q3VYJnN7fSPNmhzzMdA46js1Cj3gsDk3TNXZwpAfG3SjD35",
  "key24": "2mHZGEWefmMPhfHh6BAvyexWSrjwBdhJ3KeGgZmWCfvKk2dm6ei2UHbxjrNB8W9kfJDDKKmroonamMFo7RQnKKBM",
  "key25": "2L6x7N8cxmExytWUMK9BouPCChmtbqQS8K1VKGDEQ387sLJvyEzUb1VPdxavRA5uYpGg1WBfWtqyKeN4kidtUaSa",
  "key26": "4znu4tjgEVQ2UnSVnvUsrzvmVEr1cXpASEEZZaN5LRKPmh7Y2AiwbZc5B5Uneh11rKNY4RfEjcB49JKuRqqyRPd",
  "key27": "9cyFnKRdQrReNboUdwNuATygcZ6xpJNh9Atm9muhxpuojrBeMfouJ7j7t7LiCPVCCnFcQJGQMrsj9Y8Siqjw94G",
  "key28": "5uhNPW8k75FEH966uDYTWyWDHzFZcu3TobKNkqFH6jC6x47sE7SJ9gB7LYmzXWesB8wePuyY1Df8eKFDLSRysX6a"
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
