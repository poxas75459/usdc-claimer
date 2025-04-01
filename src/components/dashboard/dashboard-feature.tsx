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
    "TVVkkdtx4RadQiZzraJwNtwBS79Tnnai5YyCouB1ZqGde72vzGX1ivPMtnM1tjzoeDBFsgoroEPzbYSDvWsLmnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5tXeFYtNEpWG6QQF5S27LxuXgzou7CSUsXfQWgKZyg5BDzrJGkHvUW1bJ5JaAZWD491XEDVNh7T8zC2jEv4arf",
  "key1": "2a3mRctuR5ytebKB3fnZPaJQr1AY21z2jeApq2r47Yaz9HHuv8S2cJjA2kGv3NiRf5PoThZaECWjabSSjfRwJTZN",
  "key2": "2Bwu1m6ATcipbHLUL1je2GGtAk9jNHUFa2hzUjJydTctGFpFtcoEQSHK3YUrsPqgWhR6bkYz9PnsZrAKiqQ9vGkR",
  "key3": "2vpqEqkDSVv8RT5X1SBsTGznu4XUHzry3BnGpxYSy1jCvGrUY41ZKLMcjuZLzVFUfjZqrxa7fhuJgk9j6gdsQoYz",
  "key4": "22vYYfMJ3DW1YtS7EiKRZa5KRPBHTE2L7GY2FYCJDS2gro4PAJg3AEMzzLxLcNekorbQtx5mkrzcqDDtynGsCPVE",
  "key5": "4dhVn5SMmTMhHBCQmBeEsFWyjBX2V1rGsGymYVuVdfkgiRBesWqXnMXEu75gXUw5jmyLu1APvPH84VSheYivJiBg",
  "key6": "cPSWmVen3QvKvmjr3bQboE5EK6eKcvpBzmrZMCitncXodgttutnjFk6W4ZhCTkVH7zmJ9PBJAHBYoJciM28JJ6F",
  "key7": "4aYHHp1qQMjeCfxFaFwEu1kVTkVRxCRA7XTPmPnjCEzLvjdJoD32VnXW3Xvom8XTcrFXY898kQyUsVGYht14cf5g",
  "key8": "5V6Wu96bVp4eocvHoBdvLu6ZQuESBkyrygioPHhBW6jGmaB5FWbDhScznjoFvRxo1Gew9KhMYiCT5UNXXfUZTEAq",
  "key9": "4hdqyEMy9JvqXsXepNwtD1WhCcP7RH7MnwFeJa2vorYb7XRSBBp5M9SD8mgtBqR93fmRR19GL3SB94smhzEcSBeH",
  "key10": "32exN2DNzHmhsi9uRcY4ny2kC2wG3BSedRrnds2WxZcDDJwduYp2U8YyYaCZSeAMNBcb6jBJJ9yaZjA14QPsvv8X",
  "key11": "5ngZRxFyxFeGYQCmZs3TK85T6xeBM5F2zQKrCodvcpX1Cic8YhH97j3Bygt9szitmdi8KjSab5VS7DVcUgJMKRxc",
  "key12": "4pv7HpzF1PjFeSfi3Dp26DHJXR9HQFmVqaCxdUYA5rHQFC8CHSjhP9jcrF2UeikAwTsV9yCnTQ4Dfa8D94nAk7wc",
  "key13": "65Nv1VM6AXBy3XfbeSHyzmUwLXiemXUsHAJjbazJHQ38rmU2CgQFGWxPZGn8ZPhYpz5koqhTGBXoQoR1M32YTEtM",
  "key14": "2eaYWZWNiP8daYF9xKr1gr6vXiKmBkyr1ryyfPt5wW7SviRQhAvxGCkrLQEzEMnYTNwCjHRTUrGbCfxFQvx4DDkr",
  "key15": "458VZyA5CRrfn4AspVVbFKsn3ybJ5RUwbt2Ut15q5Evb3XT3mYsuRd7HKuFv68MsspRPdWsvJYe54w2fJs1idKR5",
  "key16": "5VYeDqqwDrXrX1kSaJn4QHK4bMzZJjEZERP7KoB2UBU7sp83axs45BDvFsCqVdNQKzMh5QDvJQHrYbwSawJAK4NL",
  "key17": "P5g7nNGGQf9L2doZHxWT9xRx3sxtUTf45LPy345nsFMGqcet55CoSm11MZ7sjqA1e57o8fLUB5DtX5WvwQf1oCS",
  "key18": "5UtUTWSGQDiogeUWA97yf2SPUX1WdT9DB1pKHEBzDSeempPPu3oJWnLuvtdGFS9XNMPne5reMtgb1UXS2qHh1pqo",
  "key19": "3bmZJXPvx386SKHc3rt28rnWp6XdHDHXUPdDom3NfNZobcmgvubkhrodKv31iGUihrENJTWpaiHRULuVSrxogo7d",
  "key20": "3B79maR24QW2GF58ktMFTaNdJ7MkQwJSCKXiEb5oBuYx8tFoMmuSKSR27aavGxquE9Y327DL1i3QjBbNzbrcai57",
  "key21": "3X6jc7pyYt1Qui8L6AKuRAGQDcCJgAuY7spouKm4sFpeZ3FmkCWEbhNiuf1Naea2ExCFLeHRR72ffhePkNTm7nQD",
  "key22": "2uqeMTf6Y9ixQwMNLPwdx1ik76APkSKrdwky5WDuwETfdbG7FGcoP9FGCaraNKPZM9FrUyX3kk3buib9UZCoqPeL",
  "key23": "3UXJ5eKNHsJA6sgSodEwLMUNTPHKkPqLYAvsKW6fhHorJGYLiVcj7KBjUG5Q4i19iwBY72HTgee1Bax9n3PGo8ib",
  "key24": "2Ux7fbPXDmmvdN9JN3Jc9bgxFzjXLjRnHTLMZ2Bh6tZzR9HivxeTNc1JXiN5912QQYtLTT7EkfZ4WQiKHQSqaEZm",
  "key25": "4y1E2v4EviX2W9n3qaWUCcGBBpohpXUWEUDotNarNoTS74dNhb89hCZ7MQqrLEDAh573QwKvCuQFDfW3Eo4aKM2n",
  "key26": "2Nw25U5Jxvm3Jb2eweathSdPGKadPhwcSkoum5RcrZXzRi6zWVxorGtWCHRanmWydLw5SoMuRmYfTFV4pnLajS8A",
  "key27": "2MoSP5wosZQqLZBEUBPes59xy4YQ83t3LYTc8bub1o7fC7ChodedCchM1qnR4yhnZrkWK875jzA2wdp74asvxfrp",
  "key28": "aFNYkAqxGETAFQ7MbEf99qYCS6feVoxFMvFe7SoHdsHhoRbZ7fU8GbcfzFYHPNCVHx5YvPbSRW9iNsEXMRuRXoY",
  "key29": "YWi8r5LBLfEKskANeEZHywf9ib9G3qm3J9KA5UbpsqqhGV2LirvAGdA3jNW25wXTQPuMFcvysnVzyDrWBBwGyAp",
  "key30": "3Je8hSArQvdUonViA9rYx1Yicu2tksx6uJibCh4Y1Vo6vJ7vi9fTQ3jZX43PBaLLDd5vbo7XW6JUz4hNUtCKfzdA"
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
