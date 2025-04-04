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
    "3yvcuwenJzHsiXLQCSkRaFovaZhvFpyzuZda5fa5HXQma6mgoHwqxsXvAXna9VXabGLWHfEcYbFkytdi3sPuitZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYgMt7hQCyhnMMG3ByYc6g5LH6NuD7yhXBemB1WW3GAfvsyNLcyLf6dmNeGHTjtEkYoPnrCZrobp1XvVaZkfsFA",
  "key1": "23xWPimCmjESSXsF14ktT74LhJorHzDXPSAoKjfvqQNC34h8a5ebxcPk37DmgUY8TpgvCueMqHmTLkSYVn3iiD4A",
  "key2": "YjRbz5Ws4qozcyWYX7jok8g9P4C6mu1ir5QBEKSgC1R71crirjxD1viKs94znp5YgaEwKkukQRNB1jesTMBLsop",
  "key3": "4rTjM4rTYYaqPR9bhi8gQpYzh1dX5Fp1uhoR6hRRpoRCbvcnyGFrXEwgiYZFpQqCviLjixKb1i35hqZWJhQCp8Ci",
  "key4": "3QfHA1wLHHE1xeatkLVq7ppDNkZ6HdEwJZaBveep8RKz4mStqRD65cSJHNWQUscmhvqgLhYckc6GWgthN6Wcspjj",
  "key5": "3yoK2FGkex8qn2tW6C84kf6D4WNDHcJQwVhC2xdcAaGapR3jXmyRAZHif7VrECCfwrbNrJjH7tU9CViC1rKkw25Q",
  "key6": "5iHKpRJtJS1PXX3LHCZhFs4HyJQbugfkzScV4tjebn49eebpVxSS7hhizGFm4JaTckfCQvW4iUpHD49HQE9YcPeG",
  "key7": "384WACAts6jH4V1UPkK1fMH1yu5vtnegBmzfhQP6YTaJBudHQbVuNpQSYjsTm8BWHM7TyqQprAG6gZhHp4k6WLYu",
  "key8": "2bM1q71zEABccgMC3bWVYnBd6LhauYJK1VXbedx84JwSxriRzkVMhwzi81qWYnmvtPfm91ttYZ8HHXkUy5L3Rakj",
  "key9": "4ejjJx7qKnLc1yQj3b5NbEDYVaF5HRzVS9A2aqfGbRKumV3mAEzUBbTiA8VoSmYp2GTnwvVGDP6L1JsEyie5sWpo",
  "key10": "51sdPUa2TeiDXSgsT24F3ee3TyVTkTsQNy2sfqADKzQMT82HBE4C8XLUvXqBC219jNbpmvEi6RgN4PRMots15BVe",
  "key11": "586WgwbFK2BpLGbRsj4JXp9Rha1NFQwTd8wEcGy8kKpNqnbxicsxSywm9zpgb2TkDBSJBjazpCpXjEhVKQmwkegv",
  "key12": "Z5545w5VcyGTrPe1WP9cG7AsdGr65RgdHTb49WX1VDfkkLmfsd8xX3UNxNbvwjpTAXtGFdgWJm4dyajVyEFWXdU",
  "key13": "4Yh1nMo3QPHEJtDxEy93WJm85EKvzmspBJbWnoPrLHXebS5wpZctwZjF8o5AeupkGJDxtnjJZDzG8gYEv27TDqmY",
  "key14": "63TCWrZQX5rVg9ZQebmYspvMXuK9QpUv3whxeZve9fJuvxmcUgWuXX5RyAzzvwyCtcWakrUzJ6nQBPZgMCC3M1Bi",
  "key15": "3GWyQJVwB15obsBZyA52XgxiWhgZeuyWh7TtsZpgt66H8m2if2DZnvWG7fzXWEw8VnWiLU9PVPjyTfZSZMptArAJ",
  "key16": "3GGfQC4hVuwd3MxgU1aLWFubcRyoT9bxdL3KTKdsipXHFtT8ahnXNDHXPXSP1uv9M1ZQBaz2kKYqhfTZmytfnq5x",
  "key17": "94uc4sx1pJYUgL4c6qo987neb78NtspAUrGdNDnaGcZzAwMjNeLa3BoKcKdWH21kHiYRtbjcsE4eW2xc7rfwnfn",
  "key18": "3hwvt5N8eY9QWJLXhRruH3jJpvGuHBbojoSGAg6Vz6nRQzanV9q45zTJBqxAt712gSnqjPPBVecmHGBaedm8ubYE",
  "key19": "4MDgAqksn7dERfMWeMerJUj7nziWxbxmETLo9bRim4tCJALnGhdDkjk2sUBe6CxipHvysnaM3kiwbkwfj2ZrHRjx",
  "key20": "qa2WK5xPPH3VN9Fs1bkSPasMpNBALd2TSgDCaKhjCAkbGaqTUqHW3sQcBsrVVz7mbaoKCadm6uQFpMSWYcteZTU",
  "key21": "2ryHHSK61hn6hX2Dk2bjspWV85cGUSfK95giN3xHhRxgb6iYVm6RoVfAe1J7DYzxRzhFx9N1K95tfrVEhnSTa2Ce",
  "key22": "5CD5Q47CbmARBQua8N3ohPktmWo22iEGbUuqQUwVRGUiSQy2DRwox115UQK5wAgYLGfL6sdsMMWSj2ZTGjxH6V56",
  "key23": "21LTJEKGjfdJH8EVBWgwPPWBupKsZncWGnZbbWnCuTFcpDdwFziFaKzJhtCY8gNYDd3SzXbDukYb1vdbbVCB2GRz",
  "key24": "3H44NFX8UCxmY3gFfFbjHW7SEMt3YnNY58AXjaUTnKBko9zECEx9nd3SQRqqgkncTPR3TFUbq5XFTLNB7FZpC1oV",
  "key25": "3mcohex536gk3DWN22WNC4fSdiw4Mcbq216cSRheatA4EHp7RT6m6bFYYPKYnaQ2on2h2wowEvNDzwHtcurPUki7"
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
