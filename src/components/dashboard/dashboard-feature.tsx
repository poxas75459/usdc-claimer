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
    "2mMf7qhs7JUDBJAQhpVZxyUjkYpH6pfQnDLwRUSjgVNb4uhodF7y8zdkhcapYBuszknywpCNkgbTL9pYoRRfkcTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j53kF2S5573et6si5UE8TDUG4LKy5bzL7boQxG4gByB8oeXx9o9ewssQbdLSBCoMmmGMYef58bydvusiLsfCsNb",
  "key1": "5ChYoNLbjh9N4P3vt27ecigDPxWe8rkht63inERmZpojMtPrh3n5WaBzi4PbZvXVWUfiqNb639ibnwyuQaW8WvQJ",
  "key2": "FWmGSGxdUmNogQRE74Ab4bT9s68CFETT6oBmR1fPWKGq2uwyvzh2nP4JQo9H8J5Z8JpQpFfxD5q33dgg3yc9Zco",
  "key3": "5tVMNbDcKfR81qboyxjc32DgZsBF1Ndx273PhuaQaRzvzZzorzWVav1dgpqsE2L4mZuw1LmkvHW8A1QtPL1yu3HP",
  "key4": "5VDquKUbpex8kAgs3LFjsgLZ7LftykJT99xtxLLjrPFEDS9kd33c78AhCcJTaKBXQfQ5tr1nzu6ZYG1cRS64iZ8Q",
  "key5": "2zaLtG8mhj3TzR5CWkubLns5AoLq3AoA2TMju5fEoGNtPdG3sPNGM1up9tSyryNkJXVfACdBVmc5vj474tNFNmNp",
  "key6": "uS5uNkFyDHnfKWrQHJMo7Pe3SqbQj1H6iztko5WMXxH4RYutT1EWJDPbqYMEhtGazWcGihhdV9wg2sKW2SGVhhD",
  "key7": "5Xkr3qdiuzso2gdN58jkwcvcf4BXyzuuHYwisFe8PGsCCUJvEG5QW68bAFxSJphqohWgb3VWyCykDPB8mbFqBdRH",
  "key8": "4Nk6VXwhDGeVVAghZmgdcgzAN21M3MoLwMb7FJFLwxuNRscc2CTuXokoqsQm5GdG58UvsBcc6AKstFw863t4dF3K",
  "key9": "5SSAGQ8kMTp7YAkbPqEhZeDzS631NPu8jKqyzs62oGeteNsnLyNywy3mTyX5uxJRgLy9Ru3gm5fhGc5RZzbGHaZu",
  "key10": "5im2e1qGo7R5Wqhy2uJtfLYwhyL14Ed8kKTmgke1igdvGDgBcyx6i8LEVuNHYd7GntH3ASjnDFdyu5UBVq7HghgE",
  "key11": "2PrbcXNBCDPvizM9A2xo1zRa6n63GGc32SFBX5qYqUQ4vGPixPAhHdMXMLSvUWcSujerfmTpm8TH2PDEzPhuWWEq",
  "key12": "631tSjsNpJD5K7NjmfPCKPRxygJrNVj5kiMJ13vsDWqreiiavW1DcPgiMv5w2V3gEvZaHnb45EFnjUKpZPeUWjTK",
  "key13": "5SoHNJft6wnvcA4ej5Xrm6pSq9XaZmKgcFhQVTjxbqSfmcudj6pmvv3vAR7yg4T2G9MKt2KmUFRGjYjouJgkygG6",
  "key14": "52t7yFiPbdvK5ianv8RhwBL5c6UricfduNxtBmPEPNrjzgsxvffTQBqrLGfW1Es4hFaZd2jhNu71tYsrGQW6F98Q",
  "key15": "5XGKbBmzPnZqW1FbkRUJDvypYNMv2HDWoYre9ULNUzSwQqHrNbnDFzSrdpWAqNuYZN5ARJEnhRHCF3D4AKdy2B4F",
  "key16": "4c8DFeM4D6TFBwQn31FD1fdnmZdeedzdi9fdRW1wRJvM79ttsqjKfvokBm9oprTDsmoGkuihEmkvoF653dSjVZXD",
  "key17": "66QYMzjZ5h8yBK3xFvDNh5VC35rT4mkD7i4LfKjTxSb62s3a8CbaZCCBW81RATCmjQGM5GdmMAjrspKfu2uSSn7z",
  "key18": "ELUSHjy9DA8kGxR6u8gftHUAB9BKD3wHEhFXPHUkTNQz3P3xQ8K2NKhDPV41ua4mjeuNKRPuMpfrS3pUgJBavFs",
  "key19": "2V3v2PWqzr3Sa7WTa4pcjEHQ6QBatmjDmQjLP7ZFWv4GoXQVVzeecR4fyKfcnzeYSsAFVUeZkHjvk5FpsSqocJAi",
  "key20": "4KDmfhv2BPZNaJEimyFirZmqCbi8Ha5WQYThPPD4WSG3NoYXMrkyMyohmRWtKcB36XHN5QoxJqTr5NBWdwFwBL7W",
  "key21": "T8Kbqg2DBTJ1AegsXDnLx2o89ZTdQ2dHREys4hwZYcjCaiAzeQMoShM9YtL68N3cnjcerdPdB2fDZzLBPxagHiS",
  "key22": "w9T8KxbZHrHF6LGS77BZviy75HsJLxUi7UGmNZKomisKLpwb2nTypGodsAbTPNGokYReBbZNFKRqoSoyiFCvsqF",
  "key23": "2kXj96RShf9kHB9Axdm63KKWjuswdRzJN2bPdPsUbBKorXLJ2RrqftM6iSchUJhQ5w5ySMakv9mBvPoudzaaBGgA",
  "key24": "5MZKJ7s6dfPZmQtbrBNfpJAxchx41yXp3CMK6LNJEKZx2MH6nMGHVZ96Q8babV4m2fLYPHq96KvdQXsXGvc3gsdP",
  "key25": "3BhiPzTE1xQhw6mkebbGaS4VBDiELQaGNZkmK3r9d94b5kNHyGyzicndNgjYTUjL5zVHvLL6Y2udXze6UMYAohkq",
  "key26": "3hbXvkbubru4YmG1dc9DFhqBNZYnMeTw2nMQvLrvJuacevhYZ2VSXxVhSVYYAhyBv3zDytq56GEeBzBCQ6Qno6X",
  "key27": "5W5KxDyfUParP4LMrhGX416Ky2KRCJ3SDVNFHm1RhSnsEzezEs3je1MrvYrhE4yt5XidZzw4t5J7oCf9PVMCh6ZE"
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
