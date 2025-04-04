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
    "3F92yJyxo7aYq4XzLXdtsErE4y1Wb63fSAoZ78zV8QWXbMfjDRADZkha8nXLmiS5bpZS3VRHdLeHrwvGhJAP5NpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZN3XwpQ8WoNYEnbjMv4E62kL85hJqJRotF9E22NRsNAkya1G63tYrEsajNHaAwQuy3cp6VBwRc3pwgj9mMdvaYq",
  "key1": "iaoZuPmP3ghyNmQbNYjGkEPBE1JLbdTf5LcYHCT8LWHCtKkbUYjmXkmUoyGKCAg1Erh5soUy8nv9NfRinnS6k9H",
  "key2": "ub3S4VzYZJNE6U7HeFYx3SV7X1Y4geP2Fma3xSPvwsAY5fro8TX2YBYyxLVbEYBdLrreB6KhgJAERkdyvm3Pz7u",
  "key3": "4ypjU3WAFvE9iNFyUpLzNwBwiaAcJGAqvRbK7iwGQ92TTLkpw87mf7fr2NEJt63pwBgs1MEBRcVYUv17qLnss4uj",
  "key4": "4E3ETmhourW34wsuVTF25ZWJmTmnnFmDa3GiaSneQa7zb5hws1EeuyZ8wg6JxpL1GSu9dVVqotYoaBDi9RH6icpg",
  "key5": "4b6jBTHuzJxM2hWVt5u2ynySoYPAartcoEb8EwjvErDQ8gb6BJdeuDgcBq7AjD9Hi4R6jEGwzFHCtgpDuJ52UDkT",
  "key6": "4kRyv9PtvWDhpgaWZDTrhVyrwiZmf52jSnQXi3EtBuVrFCcxuamB7nDe2bX7wA76Df3jnbprG4z7FMeRERo5TaWa",
  "key7": "5MoEV1vt23Z24dXWbARg52oPCR9D282RxqYjYxvoPXJ8YEG1Q17WvMwY2k3MdJwYpUYgT58B6LCAX9cz197YnHri",
  "key8": "2UVS2d6DmpNUrEEdSoDTDjzx955b7BzhogiCEBSzFsYSDenkvZ9T6josLDqWmgdgoSBfQM78hSFeLH5Pw1Ds9X8V",
  "key9": "9UvsYKHrRH4G9KfccpSv3JfNV36SnHrADuLH4GiAskkEVh3PXHJx3N6KN5NJLyiiX2NRU98fDjSqYd2LiC4vYkf",
  "key10": "42hUqcYrHA6WvYBgPNwtzP4VcPUV1h7xSTT61NDC1BoZs2F6avzTN7Ujpv9Zij15oTznRzBHXzMzVF5vbfpHVwRm",
  "key11": "5PP8Pid8eQm26uevLshTH1RmdErBe8Yph45qrCCgX12EiMAqaiT98LgDwpc9pUQrRHPUhQr3MnamFrXLWKQqHpja",
  "key12": "5mRkR98q56k9wt82YGzV4CGZo9ShEXpeQwZtKKR4TKu8CEki3dJuirsS4xgrLNdpZM2h7Ss121NsXpGmFbEd3cTd",
  "key13": "5GPoXSQCx8yiJVqZPqD4YgzJxX4pg8J7mQuwCoh2JiWZBwrdVRGxvrEN6Rq9uh4J3ZqLzXCDnQNGFe2VnDd5E1mo",
  "key14": "4bocDmL5wm1SNdmN1o1HZAct9TSVHetgzBpb8jtLvRX6Dam6X9bvJkVgt1SA79HM4nGvEDfBPMSEepniVVjpBqgn",
  "key15": "2e4QS8psxkNiKA5oJwvjs5CKMxRHd2Pz4RgAd39y1KR97ymyoknSqNv4kQbaVULBJvg7FPSB21LViAYqxxXATML3",
  "key16": "5CPh88XBP2oLAd1FprDw4kE2Txvki1y1R198Bd3NJpQTDVfZ8p8vx4x1828HhZuwDLfBzmnRtALMRp7GvFBEBS5C",
  "key17": "4ACojtRGJcKZvLWZMfr29TQmfJpQ5UmaCqGuYUfC8WR8JLQQ6W5PrZ5Q9ExDmXtAKzGtx9YsmquQVV3JSpqeiC8o",
  "key18": "4y718PZWK2mfC4aWB4yKguAjTc2iRgoHMFKfoxGFeyWvNHBSoAYAR2t5ainWzNBt6aAHHVCNHcbqaoCn2jzxymXW",
  "key19": "4PL9uUxmAZE6Wsu9Wb5xpNtgDVNxx4mnHPtxdbgpqDXGv3w6r7TLJCCA3aBTegHqdEgofpXa71F59WpXTB4vhNWm",
  "key20": "24iBkcgaVpDXVegB2AXyFSQZNzd1g1JYQPpK7Bvyof1UiNRLpq6KcyZByicr9yJFCcUwugnjQ2z43w3aqPXqfakg",
  "key21": "2jhLJowpE3GLuuPGVppjf6w3opycYpwS5muz8HGWLJ9uzMwR5vUgEE3oQosiiLmnR5mZ5qzpgDbQGWvPf1YbrnCH",
  "key22": "DXbhqp5zWQuasR7jhW9uddxZE9s4iWMCAZvggDkUKB2QYNiDdQ3XApE4k7TV5HA4AHtEPh5hPs2vkqWPtKUgjBs",
  "key23": "28xeRtmv8r4yscgtbiTLSe9ZTWKeGJeq5aNryZbrxPu5MkoEDFkWipkgSpp8YDUECiMM9goDZsYigCAjvMPvguzW",
  "key24": "5sTd88dQwCQThLLhk8Dj34SyY8G37SEb52z8eWSR4tjV9TWgaCRvCnR2DhzWkUHjxQKKeJ4mSi6ofYPsLeq3JyWk",
  "key25": "4n9yXSzvY3edDGr89TSCVGxaWpca3r2CyPqLFdCE4bgxX379zYGvwysaEjhPj7Kydh3bf7ECL8LwN7y7juACrrTy",
  "key26": "213YVE25FGS2rwWd7n8fDbiXPZKsWE8GsC6hnHwpic1kKstAJRQ58ekRLrfUMmtXU67haTSHLA9CUbxKjuau2T2c",
  "key27": "2VhBetFy2PJ1pbjNCzP2d1L8Ayt8cVub9thUzNcZawScA6Fpo6Vrdx6NbbbTi8wtRTisGyARmUcyzyBBBFwpZ1gt",
  "key28": "58dDL88fVGQGAiYfnTUguEhys68saEm6rUcpkz7TnGdvvah2VvEoZomdXTPDTut9DtZdJsV4RjpHyayYUn4mMzFP",
  "key29": "2PedDtAemhrq1Dw8ZGsFVdYttw5QgfXX9iNqrWRWLDEXN4k5H4yNryGBfv5dSnzrffQaVtSA2jQYo6w8Xjeacj6L",
  "key30": "2ihCDT2dTjhEjM3nCczsJS3x9tuSPbfY8P4WewZsdVAYrfrB6CKkSB6CZ2fhQhoLqVQYVoFjSsKuAZpNk6ojzwCD"
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
