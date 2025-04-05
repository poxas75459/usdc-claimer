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
    "5tzseddaH3JHk5wPMtoENT9PoWqUxCKNptyuYv6CVnxAEKWX26sS1zW8vKyLFawwDB4HNo6LZuKGPhEuNoJVWGv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdqEM6WRqk7pcvFFCjEVK27xKAvoBrS1FUmAFrd1y6NLVhERdcEz5GdTM6U9ZGYr4XSpw26Ld6p4m8VZi1EjMED",
  "key1": "3Gb76HFDafmRw6tHBovygFUbYYwYaPCxu8Q7ctUtijd5BMv1HtZhXDS3ZhsZk1TwU3Kpk1Ns9RZ94kRdkge9RmLk",
  "key2": "ZcqABEMvKBKQEuNLTCpURCGCycwiRKw86HcNoJbPedrrnagDBHDNC6TaHn7TPjJ2iHqjkVJcLtnLNVuTJRbi3bu",
  "key3": "5EnmZLaLMS6HLJtDPLMwfgArJnsN4HgecDCWKKSmv8NS7Qtt66j2cEhFnrSinKmpsMLdN7jiMDdR22p34MyhsGVA",
  "key4": "5Z2WWrRH6qeyUhpZh1rAoK8p67eP9pBTV3r2dK9jteJfX9gaAXTcArspybH1pgpwqg2Lmdq7EbMxBsPca8DmyoDF",
  "key5": "5C1zYLXgYNu1kqEhUJR74bKxpcFURrX2RxFaRmPVeDbZacsN5sb6nA5DUFTeY8h6tkRB4137X5eYcLumDVZkHRBR",
  "key6": "62CNg2QXYfPqXSJodBAyj7NPdRnyFD5apPWtwqFLDXRaMJmb8j6P2jrELoLFjPUTf3St8UAW8Lj1wpnPynpHC8ew",
  "key7": "ZgpbxEtjZZgqX5tsF1VJhwTTdfbfwt41dikwUJz1YMh2nkVw2X9bnRQecsMAkrWRvSNBeybqKhcDRP71fgZAvbf",
  "key8": "4N8srUAJ6fJSN3atnjtNs9mxzEy9dn5yu9mFzv3iJFg8fyg5ajAsMhKQLSEzUQCLR2qxBDDUeHYysJGyT6fe4gGQ",
  "key9": "UdET7yqBPdo2ivqX1wRPoiBQc65uM7eB84ffHkELT1eDGuahvHGnT2ctUyooJoErzvQteuQKeSozkBaKpqG8omR",
  "key10": "5ZG7687drzNKZHb5efhuXHAmcTuyF7LAKrnTJCQn28UYfwTU1Hv3aU3F2su8UAwDxmVNvcCAW69qG54JSh5e7Lc7",
  "key11": "3wpyo6UMKmLuF5dnYgzG9KxibeRm32Go3evGedo3FiFAuEwV4RXSCbKHresWkSAdSxGJrSogwtabGr1soqUKMyEA",
  "key12": "4n2qGpe5z73BCUwKYTXibPGrXa5C13HHvUXt5w7q63h4bH5jryAMeggM8ULX2GGuiiBXLezpmAf2eYnMigZU9AWj",
  "key13": "ovZJxFrrbTApAN8VBMnk42K3CxWusm1kLeaBVMsw8XGHX7tv3o1LmQWPYSivsVSmeZKcj58uBLmXjnNNNGs2bTH",
  "key14": "67bCkuS13fdE36Pv67nVBK7UDeo9zK4hhqsLwSqq5dM3qakXJhVa6Mh2J6gxjovrzKXmYkgy4qXYq6vd5htbZSUw",
  "key15": "KyFNSEUsguwmhDhr1bqoVnYcz33ycfWKhnTD1Wjgp9WVTuxSfoUE3oCCEUn2z7ncxfz5B8gQu1ZnzCAVes5sapM",
  "key16": "EtHHPse1U22Euk8DptQi5JPGATij3yPjBwhfaP9iMHK4aRjh3T4E9jUb1ZrYmVVPhrW76SrLFme587m3KJxcNeT",
  "key17": "2ByCiLcycux8VMhw9NxGga29r78JmcKiqbKps4Z4oqsoshdYjtpgdgFEvCNGo87HStCPEFT7DnXb9h1Tan5nVv4T",
  "key18": "8AkqKjjJeJgm2ufREru1cvdH8EC3P6XYtfUvGmSXaPb2a2XMbGjxG3GrpJvtsN5VJ8EkBjix5336dQQEewru7my",
  "key19": "36jhW5MsaVPCnJU3X7hDnRG8JChtZ3n5Sp5WXsFUD4WguTnz5yDrNQNtcJQ6GtcHMa5yodi1q5nAau654u9nW9tG",
  "key20": "42V23Kyng4AAE3K7ZA4bDkaZsUXMhurzZ1zER46xGxuCBedrn5WjdWps3svscHDkBU4kdNKo6KCxvYet1d8qiGMN",
  "key21": "itPR52VCwt1t3WEqif2LWv8YiAb3H2gKGvzciu8TeVFU5jZrqvUsycJUpSzikKGY3JZos3rbDedS57MXcFP8f5e",
  "key22": "4DqQQcRbWQPgiMGvUvsx4D122iHB8LPGLsyEsS4wcfwyHPsFzywok5XztNhMLGrwV86MH2xxpS5dG5tAKmcFrK2S",
  "key23": "2xjA6pwx2v5fGupyPqobiY3a82qMn4aaTg73SVi1mm4Zpbo4V5TborM35jLtawAp5ZToKbJDNXYR1UAnP6ETMWfe",
  "key24": "y6b8V6VPCkgUusrnC46w9m1TMp3kqTaC8NjUVgkxro24zGRa6aTT7LrCpw1JJcY3hB3VwgLGzk1PhYpqjPZh4YM",
  "key25": "3jRzCzUEysLoErfxVkPeq6F8znAFAex1YJG7d2USd69dPxALQpvzTpa4MvVqHCmvc7ycepuPRrDAdjmFXMQPAVbJ",
  "key26": "2aBJA5cFT71bWADWh6Mr1ouNm2PMBJH9dXV5P8PRwQWpKm4LBp26MYLLb6AECLGJitd3xjmqMvo6jcnCopeyKUkJ",
  "key27": "2bjUwjzWRsfwfdwxuG61eXxkgcZgaVX35iZpD2N19zoFim7jx3Fs4a49XSpUPrCdFj3TQQEZVz1QQX52QPE8H34F",
  "key28": "47TpuewpBKQ7eidjmJ6yQ2QX8vguDTsNusYHS72p3TjseYiEZ3LNGGP1Vpoq6bpgmERyRtXPRfGXYHX9YQRzLGN5"
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
