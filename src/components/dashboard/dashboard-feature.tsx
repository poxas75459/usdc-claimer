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
    "2hAXPMHN2CrR2LYUQjuag5Y27SdZDKkUByZPWC9EKuyan8NVkUNTnSNVsfAXgJaenkZffrfME8hZyzDcNBiYhznF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WycDa83udj84WuCsRVnh6fSMdrq5ndZs22VW3tosVauH1WFRj3gw66EgJcw6HbaD1BrVxqUoZ8uLSeZ5gdY63Z",
  "key1": "4pxxpCAoGXyRczZP5LnWAC7Rp5SjyFYPgWBfXAF89jRFEniLmK4arTCYkFzW5SsoGagPBNZDEQ9MR2bYXv3qzbnf",
  "key2": "3Fcdpar5TVoj9GiftJ92nE5TphvP4M3DjvgDrJG5wvefiH65F99TjSZUNEeBAfxjzBfmSXz4Xx1RFk2Ea7WE8XpE",
  "key3": "CwDG4tiVzaaMqdXWB38nc68dPVP1gogPwaQf6rxS89RSgp3dJh29LqkEk6CuLF6MbBwoinvK4465jeFdK6ZPK2C",
  "key4": "27ahjbA7xwiy8SHBf9bGuvGhHNCZPKvr3o7PmHyk8pj1Mp2UpFXacbyWgdPgdJVvGUXk1vYn4ZyzcQfdPDZ1UdHC",
  "key5": "4Cu1PHjZL9jwb1P6sihZCAhwMZ8CPqnMrwK7ZgvbNUQ8u7H15B69VgmDpmxT63kEx1VHedKCuiZnwHRmr8s4tzRL",
  "key6": "4WupEzLRtWgScTd5adhmnXHwK3PaybzSNnfqufCPVijsVR3SNtbCApW4GuzkroC2yXvxR1cEFdZeAvPy12VH59Un",
  "key7": "2KK2NosapPTCFkzf4DCGiyVXwKvm97qVXWe17B6gq47DbZJG8wKNJKkk3gqQCfDfxS53GBsNskhJsNWjtTjJsj25",
  "key8": "39YDKzpat7xmmn6U48YoE68b42jDR9CxmknKGt9N6wEqsDgkcPr3i5Dy5dBZuUnug77NY5wHA4vhXzWvj1afn6JN",
  "key9": "4S4Z34Rv5WotMgGYbjEW9UpK7Phe2uqg8rQi5mUZgPYCt5EwFPg2jpGk3eA8riNjomKSVfGvMJPhfG2Rp3Bnj8qN",
  "key10": "4M8n7Fj5igWmrn7yc6xU8uh5cRGttpjUrLS7eSVfSrMa41FiT3dYPhNWXFRePQzy15kVcq1SefuowN5nEzfVjFLq",
  "key11": "5yS5FvY58qWyDGp6Y1NPkbL5i8EZdGrtjdQNpK8NfP6Un8uc2ivXG1i84zQtSEuyBASZuQmu8tifJjJ4rVUenJKZ",
  "key12": "5yY8MSnvNjWVYZunh9ZdPDmp3cJ7jKqHo1UW2SQ3MSRDgiCQMNkepb9hek3Y4myNjaFEqmmLYP8vkG85gYhXxBjp",
  "key13": "2Xy5dX5GkzFwrExKBL5dt7PX6umvoK94NMRQ5erGFNv5rTyc3EGxvR41q24rjvgqUyhyxBnYsnrPT1yoPKg19iJR",
  "key14": "67BrQbqtBgoQpM7pXdwBF4pW4RJb9fzhHpYGeGm3zmULTXo41atAaCwqELK5ANd6weW6L1fa651dsz3TRN4idf7o",
  "key15": "jxkyE6Qq37DCkg1fDNMaYYCwXnLbwqGhevLHFFRCJBQHT6Vy2PHgjTxdMFkZxAuAzrn1fRtsX4cw4TaFCcgTnKR",
  "key16": "631Q1YWvq8xokbQAzFU6zZr5LCDM5BnZBE8wP7P314bATjM3GLmbFZNxC7jPp8nzMQum2N5Vj3NmGqVTJA3f47b4",
  "key17": "34ij9DwWCCzGukDfHw5YeHmAPdzGGbtoNcPnqSu9uQ3arFFdSU4qejcajx3K3NJLe7NrMzYVd9drUsTXsaCPP6PP",
  "key18": "46T1wR1Fc434Toaek6hguTZSwQuTEEx1Q4LbF2HJgZyw4JMPsCPMY4KgPCGU92BpLxDXLGP7AnY97QLmaBYsQhfF",
  "key19": "Uuf9EX8Auy18VagE5MgMqwKDPotdEBBUahj2sTMUWT5JGFb145Y1dgDSgBNxnacWKBnjxmAjqVUxFYoo6KEbyzg",
  "key20": "48k6t861KM54u2PFNW9dkLdU4tXD2M5Urbw8T73radx1oKGVjLkHj2hNhnJXJSUcrGxa5otyLvT3bnxZiX4Rviox",
  "key21": "4918C5mf28UzuVtsbnnfxamuBeZSnbvpgycUZ8dMWb9pRJ2dPQvDaDxeLrnTHQDdkKPayufk6ssjzozsDp2DgaaL",
  "key22": "3qYXaguaGwxiGdV5754YKxnfS8vxsi1qhpkdCoZ3jnzYenAJAzPfucve6bpLC6uR4hzH7kDkBVcgQspNPCBA8gHb",
  "key23": "3waPARvvsX6pNS9F3RNenKfqSkBajVhvAkDFSj7JtLcA3rgw3ozDMeicvn4yCXW1BUGpEQUPBj11QPMAV2eqaxEd",
  "key24": "shB1cnctM3ACAQKCR2UBpeLYayZY5CTNXSQMGBzUoUPPCyJiE5xVPJQRaZfVFcg7b4tMSKE1PyPKWLFEUNJVrT8",
  "key25": "3bvnGjRumKbdNcRLk4ntfnUxZcvR4DdRxhDP3sPnQndJhAycmVJQva5ZnP6oQZPRn4narF7vxStu2oew59Cc1Fia"
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
