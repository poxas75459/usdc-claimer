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
    "3p5FtfTr5a6wpuidX7UGS5gXG3VeNiXus6pH45dJ1tgUFvtUPszfWGQWSVGdvRPEAKQkR8HAgUSHCsFhVyHfD9uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgkxS6QexAkcQAjNpamdy1CFp8wkeo1u8g51rhZ3wg3EYg61eDQKSBTDiTpEP1ZvLHxYEeyG3LE9UxsZeDEf5WS",
  "key1": "4MvR9mmyUKwpQ19fMMacF8cduvcUDHbGhJ7uLjMGzD2g7QAzZ3JKEoLhgVL6LUQmwtzFR3YMLUngxZocK2QkM9DH",
  "key2": "2r4ahm9FQYFdu8CADv4JpHbnHV9kiFdWq3aiRptBAewvgMwz3FW1pyiZEsqjch281Qvm6dUqeZam3mwJusse4VHy",
  "key3": "zmkZjarzKmnSAhqTaHh6YQv7k9sVqcVG3m7yD4RzkLUF2kjnYmJW3Ky8R5wMLMVPGzAT9gx9jKpzfXe3kWmCXAi",
  "key4": "5dNS5LNiq5Y7TDDrbRq7DQdCQBJXdJv1NfiWcu7qBmgRXaHc2QkApx2a1FXJLX5HTxTGzZkicztQgJYcXXZpawrd",
  "key5": "56xfC7WkFgv34w8UsV2baQzPFrnsw3hMw91gS5fFya8taEWcQjJosyRWNmYDLpNgBV7UGgmrhnGzgm56DxoHxXD7",
  "key6": "23seg41fBvvoyxCqM2ornWuRfp5LoVz8G864CrgKnZVvaz1kCKYKGUf8ygC81QP9AKAWkrbDHUX2EAhhgAexQH76",
  "key7": "5viKMKkZbGmdfMDV47SrTXL2P534QLRnsxim4JHapHTcsW5vvQcKMGuvK27zDKyHYXZiHprttgGRfRfmjeKbvsXX",
  "key8": "3Eop5iJvjjCq6QDj7CuHGrnTs6FShXs5NY3C8AYsExm64NqJdrTb1xxP4RYF5yiMBULGgMrCfanzfN6NsU4X7K4J",
  "key9": "5ZHvsZJNgsbomaFJfZzHL23NhBWbfW7BHaeFqJQ631HdNv9VQxUVAmwJjmviuR6DjEiN7kAVjCjepEbYGpFdrMo",
  "key10": "41V1n2iiz2xjymMFoZd3hy4af9Q7je1S829h3B9MwA5RCM1znZ579f5ugbeDBoSwqr3ksjDe4V5cMbr2bmDhNLZG",
  "key11": "taHCKR6bPixLn4QU225sYkcLRreMykTfY78CrEPB5TNwHxGmw9J5GbMSFTbGWngioT2fUNiRDmzeUZDT3q81q5Y",
  "key12": "4kmYMaE873hEaWdPDJme7tYDhkZSmXxa56dN6Z7BaPXQGK25KhMMpaLUAaBwqWhwrNHgfCWJP7DbRa3SVd5PDkcH",
  "key13": "4asyyuNnmgEtQgpoc4jhejWy9MzM4KW1gveW34VFUzysjLxvpzWS9c7YmxY21ykjbq1ueB5LAW69qNVgxP7r4Vmc",
  "key14": "4hQVrALDTiANQbm4MgR5J7zcS9Zs8VCJFzzL52Vmn2VdEEAXTPdE8nRpYu8E1PcKxDwccCf6LqwvPoKYdL9niwjD",
  "key15": "3Cc36Uq8tgDJJQb6RthGKGTFfst9yPzZTUZ1GeKUjU9Qg2Pb81XvRS3ZEcJgQp2c5xATHJGUQkogJ8E9GV1gnLmu",
  "key16": "aYb24rrpvj4bHd98brxit1MFp9nkeZVsAf1vQSKtCfVSs3Bavoo2dP9LUeQqcqJhFTZY4QNujhKkkW6BpSDLztn",
  "key17": "2myDLMs1xiyxGLkNsKXidW43AgMcQ4sPxEg2GDUYqHC5gxiDmo4JTAizaxkU59CWiXHQz3YcutHf4t6YCuRMFbWz",
  "key18": "hs4WEHqZJUqWK2WP3TWpXe5UCyZP5oMioG9D4DQsaoaPvCLmeqrqKdVUdf5kuXRWNsJJMV6rh2QptaEJgi6ExbV",
  "key19": "24Va9AfndHjrkBMssiZ1WomRYvJVC3DNZ7wmgiG1c3yLPDEgZ9bWHxSLqJCnsfHnoTKRTapdxUSnagNbpyZnBxPe",
  "key20": "4HnAZt53fxA8VvkccAUaRE3TknuZKHyFNETM6T3n3cuXPK3tuh3PooajMGJK4p3Cwi83tYdMZfyxCUFMCvfwBcow",
  "key21": "3mjojhs3UPW2p1RfTQkWcqRPzQAjKijvdsmD5L2rEVZHaDKnJ2augLz5UEFX3jmRU7WVnpeouLwmHXmAXgsmwh8F",
  "key22": "J6br5uQMcZEdQ2mHGsxvmV8283PVW9GCX9z6qnBxKkv38JeTiJAsuudXqMshL9iK1Eeb3D9wQCwuDAq8viMRW1i",
  "key23": "4WJQSjbj6jrbE9CcVQotGkFk3qgE2LwvDxYERUwPNd1jSFcbQ5N8Mou9jmqCwfxWRVz66gGUjaJcKjxVYqSqeH4D",
  "key24": "2bs2DtgCYmAdesAdHv99AaAAMrtVSjzct6kRVYd71cZ1qaqNSMJ5xEzdbvUDaqnfGGskbF4UqVFr8U2j7SAyGKvo"
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
